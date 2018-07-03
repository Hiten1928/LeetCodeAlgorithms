import Tree_Resources.*;

//             4
//           /   \
//          2     7
//         / \   / \
//        1   3 6   9


//        Output:
//
//             4
//           /   \
//          7     2
//         / \   / \
//        9   6 3   1


class InvertBinaryTree {
    public TreeNode invertTree(TreeNode root) {
        if(root == null){
            return root;
        }



        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);

        return root;
    }
}