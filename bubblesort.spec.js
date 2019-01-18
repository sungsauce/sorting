describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    
    it('handles an array of a single item', function(){
        expect( bubbleSort([3]) ).toEqual( [3] );
    });

    it('handles an array of multiple items', function(){
        expect( bubbleSort([6, 4, 9, 2]) ).toEqual( [2, 4, 6, 9] );
    });
    
});