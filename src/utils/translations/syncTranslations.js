/**
 *  Recursion function that loop over all keys from default translation file and
 *  synchronize translations with default translations file (en.json).
 *
 * - remove redundant keys from other lang translations files
 * - check if all keys match with default translations file
 * - fill not existing translations in other languages with null
 *
 * @param defaultTranslations - default translation file values ()
 * @param passedTranslations - translation values from other files
 */
module.exports = function syncTranslations(
  defaultTranslations,
  passedTranslations
) {
  const defaultTranslationsKeys = Object.keys(defaultTranslations);
  const syncedTranslations = {};

  defaultTranslationsKeys.forEach((key) => {
    switch (true) {
      // When defaultTranslation[key] is object
      // and passedTranslations[key] is not existing
      case defaultTranslations[key] &&
        typeof defaultTranslations[key] === "object" &&
        !passedTranslations[key]:
        syncedTranslations[key] = syncTranslations(
          defaultTranslations[key],
          {}
        );
        break;

      // When defaultTranslation[key] is object
      // and passedTranslations[key] exists
      case defaultTranslations[key] &&
        typeof defaultTranslations[key] === "object":
        syncedTranslations[key] = syncTranslations(
          defaultTranslations[key],
          passedTranslations[key]
        );
        break;

      // When defaultTranslations[key] is simple type
      // and passedTranslations[key] is not existing
      case !!defaultTranslations[key] && !passedTranslations[key]:
        syncedTranslations[key] = null;
        break;

      default:
        syncedTranslations[key] = passedTranslations[key];
        break;
    }
  });

  return syncedTranslations;
};
