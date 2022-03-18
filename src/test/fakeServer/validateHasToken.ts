import {
  DefaultRequestBody,
  PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
} from 'msw';

type ResolverFn = ResponseResolver<
  RestRequest<DefaultRequestBody, PathParams>,
  RestContext,
  any
>;

const validateHasTokenWithOptions =
  (options: { readonly delay?: number } = {}) =>
  (resolver: ResolverFn): ResolverFn =>
  (req, res, ctx) => {
    if (req.headers.get('Authorization')) {
      return resolver(req, res, ctx);
    }

    if (options.delay) {
      return res(ctx.delay(options.delay), ctx.status(401));
    }

    return res(ctx.status(401));
  };

const validateHasToken = validateHasTokenWithOptions();

export default validateHasToken;
