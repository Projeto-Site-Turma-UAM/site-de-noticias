/* Steps:
1 ) Create board array, 9 positions and symbols array (X and O)
2 ) create container_element to be operated with init and draw functions
3 ) Init functions will bind the HTML container to the JS container_element
4 ) init will be called with a script tag in the HTML
5 ) 
*/

const tic_tac_toe = {
    board: ["", "", "", "", "", "", "", "", ""],
    symbols: {
        options: ["X", "O"],
        turn_index: 0,
        change: function(){
            this.turn_index = (this.turn_index === 0 ? 1 : 0);
        }    
    },
    container_element: null,
    gameOver: false,

    init: function(container){
        this.container_element = container;
    },

    make_play(position){
        if(this.gameOver) return false;
        if(this.board[position] === ""){
            this.board[position] = this.symbols.options [ this.symbols.turn_index];

        }



    },

    draw: function(){
        let content = '';

        for (let i in this.board){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    },

    
};