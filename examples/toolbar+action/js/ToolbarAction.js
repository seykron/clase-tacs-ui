/** Represents a single action in the toolbar.
 * @param {Element} container Action container element. Cannot be null.
 * @param {String} name Name of the entity affected by this action. Cannot be
 *    null or empty.
 * @param {Object} rawAction Object containing action information. Cannot be
 *    null.
 */
ToolbarAction = function (container, name, rawAction) {

  /** Adds the event listener to a single action button.
   * @param {Element} actionContainer Action button container. Cannot be null.
   * @param {Object} actionData Object containing action information. Cannot be
   *    null.
   * @private
   * @methodOf Toolbar#
   */
  var initEventListener = function () {
    container.addEventListener("click", function (event) {
      alert(rawAction.description.replace("${name}", name));
    });
  };

  return {
    /** Renders the toolbar action and initializes event listeners.
     */
    render: function () {
      container.title = rawAction.description.replace("${name}", name);
      initEventListener();
    }
  };
};

