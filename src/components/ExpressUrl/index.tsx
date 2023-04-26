import React from 'react';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import * as A from 'fp-ts/Array';
import { isEmpty } from 'fp-ts/lib/string';
import { CodeBlock } from '../CodeBlock';

const CHECKOUT_URL = 'https://checkout.getbonsai.com';


type UrlArgs = {
  productId?: string;
  variantId?: string;
  apiKey?: string;
  onSuccess?: string;
  onError?: string;
  onClose?: string;
}

const notEmpty = (s: string) => !pipe(s, isEmpty);
const createCheckoutUrl = ({ productId, variantId, apiKey, onSuccess, onClose, onError }: UrlArgs) => {
  // TODO: Express Checkout expects at least 1 callback handler. Remove `onSuccess` once that is resolved.
  // https://bonsai-hq.atlassian.net/browse/PROD-847
  const onSuccessParam = onSuccess ? `&onSuccess=${onSuccess}` : '';
  const onErrorParam = onError ? `&onError=${onError}` : '';
  const onCloseParam = onClose ? `&onClose=${onClose}` : '';

  return `${CHECKOUT_URL}?bonsai=express/${productId}/${variantId}&bonsaiAccountId=${apiKey}${onSuccessParam}${onErrorParam}${onCloseParam}`;
}

const getUrl = ({ productId, variantId, apiKey, onSuccess, onError, onClose }: UrlArgs): string =>
  pipe(
    [productId, variantId, apiKey],
    A.map(O.fromPredicate(notEmpty)),
    A.sequence(O.Applicative),
    O.map(([productId, variantId, apiKey]) => ({ productId, variantId, apiKey, onSuccess, onError, onClose })),
    O.map(createCheckoutUrl),
    O.getOrElse(() => ''),
  );

type FieldProps = {
  id: string;
  label: string;
  value: string;
};
type HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Field = ({ id, label, value, handleChange }: FieldProps & { handleChange: HandleChange }) => (
  <div className="express-checkout-field">
    <label htmlFor={id}>{label}:</label>
    <input type="text" name={id} value={value} onChange={handleChange} />
  </div>
);

export const ExpressCheckoutUrl = () => {
  const [{ productId, variantId, apiKey, onSuccess, onError, onClose }, setField] = React.useState({
    productId: '',
    variantId: '',
    apiKey: '',
    onSuccess: '',
    onError: '',
    onClose: ''
  });

  const handleChange: HandleChange = (event) => {
    setField({ productId, variantId, apiKey, onSuccess, onError, onClose, [event.target.name]: event.target.value });
  };

  const url = getUrl({ productId, variantId, apiKey, onSuccess, onError, onClose });

  const fields = [
    {
      id: 'productId',
      label: 'Product ID',
      value: productId,
      required: true,
    },
    {
      id: 'variantId',
      label: 'Variant ID',
      value: variantId,
      required: true,
    },
    {
      id: 'apiKey',
      label: 'API Key',
      value: apiKey,
      required: true,
    },
    {
      id: 'onSuccess',
      label: 'onSuccess',
      value: onSuccess,
      required: false,
    },
    {
      id: 'onError',
      label: 'onError',
      value: onError,
      required: false,
    },
    {
      id: 'onClose',
      label: 'onClose',
      value: onClose,
      required: false,
    }
  ];

  const { right: requiredFields, left: optionalFields } = pipe(fields, A.partition(({ required }) => required))

  return (
    <form>
      <div className="express-checkout-fields">
        <h5><em>Required</em></h5>
        {requiredFields.map(({ id, label, value }) => (
          <Field key={id} id={id} label={label} value={value} handleChange={handleChange} />
        ))}

        <br />
        <h5><em>Optional</em></h5>

        {optionalFields.map(({ id, label, value }) => (
          <Field key={id} id={id} label={label} value={value} handleChange={handleChange} />
        ))}
      </div>
      <br />
      {url && <CodeBlock code={url} />}
    </form>
  );
};
