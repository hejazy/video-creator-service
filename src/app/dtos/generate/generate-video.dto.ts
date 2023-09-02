import * as Joi from 'joi';

export const GenreateVideoSchemaFactory = ({}) => {
  const schema: Joi.SchemaMap = {
    images: Joi.array().items(Joi.object({
      url: Joi.string(),
      delay: Joi.number()
    })),
  };
  return Joi.object().keys(schema)
};
export const GenreateVideoSchema = GenreateVideoSchemaFactory({});
