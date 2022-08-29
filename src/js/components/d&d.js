import Sortable from 'sortablejs';

export const handleDragAndDrop = () => {
  const todoListElement = document.querySelector('.todo-list')

  new Sortable(todoListElement, {
    animation: 150,
    ghostClass: 'draggable-class',
    store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get: function (sortable) {
        const order = localStorage.getItem(sortable.options.group.name);
        return order ? order.split('|') : [];
      },
  
      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set: function (sortable) {
        const order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, order.join('|'));
      }
    }
  });
}
