/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

public class MaxDepthTree {
    public static int maxDepth(BinaryTreeNode root) {
        if(root ==null){
            return 0;
        } else{
            int leftLength = maxDepth(root.left);
            int rightLength = maxDepth(root.right);
            int maxHeight = Math.max(leftLength,rightLength) + 1;
            return maxHeight;
        }

    }


}
