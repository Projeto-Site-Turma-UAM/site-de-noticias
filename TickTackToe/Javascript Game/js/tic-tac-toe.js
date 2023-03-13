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
    winning_sequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ],
    

    init: function(container){
        this.container_element = container;
    },

    make_play: function(position){
        if(this.gameOver) return false;
        if(this.board[position] === ""){
            this.board[position] = this.symbols.options [ this.symbols.turn_index];
            this.draw();
            let winning_check_index = this.check_winning_sequences(this.symbols.options [ this.symbols.turn_index]);
            if(winning_check_index >= 0){
                    console.log("ganhador")
                } else {
                this.symbols.change();
                };
                return true;
        } else {
            return false;
        }
    },

    check_winning_sequences: function(symbol){
        for(let i in this.winning_sequences){
            if( this.board[this.winning_sequences[i][0] === symbol] &&
                this.board[this.winning_sequences[i][1] === symbol] &&
                this.board[this.winning_sequences[i][2] === symbol])
                {
                    console.log("sequencia vencedora " + i);
                    return i;
                }
        };
        return -1;

    },


    draw: function(){
        let content = '';

        for (let i in this.board){
            content += '<div onclick="tic_tac_toe.make_play(' + i + ')">' + this.board[i] + '</div>';
        }

        this.container_element.innerHTML = content;
    },

    
};