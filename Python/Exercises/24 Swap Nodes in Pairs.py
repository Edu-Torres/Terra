class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next




def swapPairs(head):
    def helper(node):
        if not node:
            return None
        if (node.next):
            child = node.next
            node.next = helper(child.next) 
            child.next = node
            return child
        return node
    return helper(head)