/** Manages a toolbar and its actions.
 *
 * @param {Element} container Widget container element. Cannot be null.
 * @param {String} name Toolbar name. Cannot be null or empty.
 * @param {Object[]} rawActions A list of actions descriptions. Each action
 *    description has a <code>key</code>, a <code>label</code> and a
 *    <code>description</code>. Cannot be null.
 * @constructor
 */
Toolbar = function (container, name, rawActions) {

  /** List of toolbar actions.
   * @type {ToolbarAction[]}
   * @private
   * @fieldOf Toolbar
   */
  var actions = [];

  /** Creates and adds a new action.
   *
   * @param {Object} actionData Object containing action information. Cannot be
   *    null.
   * @return {Element} Returns the new action container element. Never returns
   *    null.
   * @private
   * @methodOf Toolbar#
   */
  var renderDynamicItem = function (actionData) {
    var template = document.getElementById("toolbar-item-tpl").innerHTML;
    var newItem = document.createElement("span");

    newItem.innerHTML = template.replace(/\$\{key\}/ig, actionData.key)
      .replace(/\$\{label\}/ig, actionData.label);
    container.appendChild(newItem);

    return container.getElementsByClassName("js-action-" + actionData.key)[0];
  };

  return {

    /** Renders dynamic actions and initializes event listeners.
     */
    render: function () {
      var actionContainer;
      var action;

      for (var i = 0; i < rawActions.length; i++) {
        actionContainer = container.getElementsByClassName("js-action-" +
          rawActions[i].key);

        if (actionContainer.length === 0) {
          // Not in the DOM, let's create it.
          actionContainer = [renderDynamicItem(rawActions[i])];
        }

        actionContainer[0].title = rawActions[i].description
          .replace("${name}", name);

        action = new ToolbarAction(actionContainer[0], name, rawActions[i]);
        action.render();
        actions.push(action);
      }
    }
  };
};

