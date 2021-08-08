/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    const union = new UnionFindAlgorithm(grid);

    // for each 0, try to connect islands
};

class UnionFindAlgorithm {    
    constructor(grid) {
        this.grid = grid;
        this.N = grid.length
        this.roots = Array.apply(null, Array(this.N*this.N)).map(function (x, i) { return i; });
        this.counts = Array.apply(null, Array(this.N*this.N)).map(function () { return 1; });
        
        for(let y = 0; y < this.N; y++) {
            for(let x = 0; x < this.N; x++) {
                if (this.grid[y][x] === 1) {
                    this.unionWithNeighbours(y, x);
                }
            }
        }
        
        // at this point you have the groups with counts
        
        // TODO: iterate over 0s to convert one of them into 1 to get a bigger group
        // get 4 neighbors, apply find, to get a bigger group
    }
    
    unionWithNeighbours(y, x) {
        const nonEmptyNeighbours = this.getNonEmptyNeighbours(y, x);
        for (const [y2, x2] in nonEmptyNeighbours) {
            this.union(y, x, y2, x2);
        }
    }
    
    getNonEmptyNeighbours(y, x) {
        const neighbourCoordinates = this.getNeighbourCoordinatesWithinGrid(y, x);
        return neighbourCoordinates.filter(([y2, x2]) => {
            return this.grid[y2][x2] === 1;
        });
    }
        
    getNeighbourCoordinatesWithinGrid(y, x) {
        const neighbourCoordinates = [];
        if (x-1 >= 0) {
            neighbourCoordinates.push([y, x-1]); //left
        }
        if (y-1 >= 0) {
            neighbourCoordinates.push([y-1, x]); // top
        }
        if (x+1 <= this.N-1) {
            neighbourCoordinates.push([y, x+1]); // right
        }
        if (y+1 <= this.N-1) {
            neighbourCoordinates.push([y+1, x]); // bottom
        }
        return neighbourCoordinates;
    }
    
    union(y, x, y2, x2) {
        
    }

}



