/* Steps:
1 ) Create board array, 9 positions and symbols array (X and O)
2 ) create container_element to be operated with init and draw functions
3 ) Init functions will bind the HTML container to the JS container_element
4 ) init will be called with a script tag in the HTML
5 ) 
*/

const tic_tac_toe = {
    board: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["X", "O"],
    container_element: null,

    init: function(container){
        this.container_element = container;

    },
};