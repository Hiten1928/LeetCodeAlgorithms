
    //    Input: [[1,1,0],[1,0,1],[0,0,0]]
    //    Output: [[1,0,0],[0,1,0],[1,1,1]]
    //        Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
    //        Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]




class FlippingImage {
    public int[][] flipAndInvertImage(int[][] A) {

        int[][] invert =new int[A.length][A.length];

        for(int i=0;i<A.length;i++){
            for(int j=0; j<A[i].length; j++){
                invert[i][j] = A[i][A.length - j- 1];
                invert[i][j] = A[i][j] ==1? 0:1;

                System.out.println(A[i][j]);
            }
        }
        return invert;
    }
}