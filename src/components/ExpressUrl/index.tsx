import React from 'react';
import { pipe } from 'fp-ts/function';
import * as O from 'fp-ts/Option';
import { isEmpty } from 'fp-ts/lib/string';
import { CodeBlock } from '../CodeBlock';

const CHECKOUT_URL = 'https://checkout.getbonsai.com';

const getUrl = (productId: string, variantId: string): string =>
  pipe(
    productId,
    O.fromPredicate((s) => !isEmpty(s)),
    /* Construct URL only with product ID if not empty */
    O.map((pid) => `${CHECKOUT_URL}?bonsai=express/${pid}`),
    O.chain((urlWithProductId) =>
      pipe(
        variantId,
        O.fromPredicate((s) => !isEmpty(s)),
        /* Append variant ID to URL if not empty */
        O.map((vid) => `${urlWithProductId}/${vid}`),
        /* Use the above URL if both values are present,
         * otherwise use URL with only product id. */
        O.alt(() => O.some(urlWithProductId)),
      ),
    ),
    O.getOrElse(() => ''),
  );

export const ExpressCheckoutUrl = () => {
  const [{ productId, variantId }, setField] = React.useState({
    productId: '',
    variantId: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setField({ productId, variantId, [event.target.name]: event.target.value });
  };

  const url = getUrl(productId, variantId);

  return (
    <form>
      <div className="express-checkout-fields">
        <div className="express-checkout-field">
          <label htmlFor="productId">Product ID:</label>
          <input type="text" name="productId" value={productId} onChange={handleChange} />
        </div>

        <div className="express-checkout-field">
          <label htmlFor="variantId">Variant ID:</label>
          <input type="text" name="variantId" value={variantId} onChange={handleChange} />
        </div>
      </div>
      <br />
      {url && <CodeBlock code={url} />}
    </form>
  );
};
