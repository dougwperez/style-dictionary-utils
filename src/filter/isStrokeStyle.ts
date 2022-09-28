import StyleDictionary from 'style-dictionary';
/**
 * @name isStrokeStyle
 * @type filter
 * @description only returns tokens of type `strokeStyle`
 */
export const isStrokeStyle = (token: StyleDictionary.TransformedToken): boolean => {
  return token?.$type === 'strokeStyle' || token?.type === 'strokeStyle';
}