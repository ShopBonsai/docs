import React from 'react';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { isEmpty } from 'fp-ts/lib/string';
import { CodeBlock } from '../CodeBlock';

const CHECKOUT_URL = 'https://checkout.getbonsai.com';

const notEmpty = (s: string) => !pipe(s, isEmpty);
const createCheckoutUrl = ([productId, variantId, accountId]: [string, string, string]) =>
  // TODO: Express Checkout expects at least 1 callback handler. Remove `onSuccess` once that is resolved.
  // https://bonsai-hq.atlassian.net/browse/PROD-847
  `${CHECKOUT_URL}?bonsai=express/${productId}/${variantId}&bonsaiAccountId=${accountId}&onSuccess=void`;

const getUrl = (maybeProductId?: string, maybeVariantId?: string, maybeApiKey?: string): string =>
  pipe(
    maybeProductId,
    O.fromPredicate(notEmpty),
    O.chain((productId) =>
      pipe(
        maybeVariantId,
        O.fromPredicate(notEmpty),
        O.map((variantId) => [productId, variantId] as const),
      ),
    ),
    O.chain(([productId, variantId]) =>
      pipe(
        maybeApiKey,
        O.fromPredicate(notEmpty),
        O.map((accountId) => [productId, variantId, accountId] as const),
      ),
    ),
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
  const [{ productId, variantId, apiKey }, setField] = React.useState({
    productId: '',
    variantId: '',
    apiKey: '',
  });

  const handleChange: HandleChange = (event) => {
    setField({ productId, variantId, apiKey, [event.target.name]: event.target.value });
  };

  const url = getUrl(productId, variantId, apiKey);

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
  ];

  const requiredFields = fields.filter(({ required }) => required);

  return (
    <form>
      <div className="express-checkout-fields">
        {requiredFields.map(({ id, label, value }) => (
          <Field key={id} id={id} label={label} value={value} handleChange={handleChange} />
        ))}
      </div>
      <br />
      {url && <CodeBlock code={url} />}
    </form>
  );
};
