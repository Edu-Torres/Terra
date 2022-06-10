package com.codewithmosh;

import java.util.NoSuchElementException;

public class LinkedList2 {

    private class Node{

        private int value;
        private Node next;

        public Node(int value){
            this.value = value;
        }

    }

    private Node first;
    private Node last;
    private int size;

    public void print(){
        Node traveler = first;
        while (traveler != last) {
            System.out.println(traveler.value);
            traveler = traveler.next;
        }
        System.out.println(last.value);
    }

    public void makeLoop(){
        last.next = first;
    }

    public void addFirst(int item){
        var newNode = new Node(item);
        if (isEmpty())
            first = last = newNode;
        else{
            newNode.next = first;
            first = newNode;
        }
        size++;
    }

    public void addLast(int item){
        var newNode = new Node(item);
        if (isEmpty())
            first = last = newNode;
        else{
            last.next = newNode;
            last = newNode;
        }
        size++;
    }

    public void deleteFirst(){
        if (isEmpty())
            throw new NoSuchElementException();
        if (first == last){
            first = last = null;
            return;
        }
        else {
            Node catcher = first.next;
            first.next = null;
            first = catcher;
            size--;
        }
    }

    public void deleteLast(){
        if (size == 0)
            throw new IllegalArgumentException();
        else if (size == 1){
            first = last = null;
        }else {
            Node traveler = first.next;
            Node follower = first;
            while (traveler.next != null) {
                follower = traveler;
                traveler = traveler.next;
            }
            follower.next = null;
            last = follower;
        }
        size--;
    }

    public int[] toArray(){
        if (isEmpty())
            return null;
        int[] answer = new int[size];
        Node traveler = first;
        int i = 0;
        while (traveler != null) {
            answer[i++] = traveler.value;
            traveler = traveler.next;
        }

        return answer;
    }

    //[ 1 -> 3 -> 9]
    public void reverse(){
        if (isEmpty())
            return;
        if (size==1)
            return;
        Node advancer = first.next;
        Node traveler = first;
        Node follower = null;
        while (advancer != null){
            traveler.next = follower;
            follower = traveler;
            traveler = advancer;
            advancer = advancer.next;
        }
        traveler.next = follower;
        last=first;
        first = traveler;
    }

    public int kthNodeFromEnd(int k){
        if (k <= 0)
            return -1;
        Node traveler = first;
        Node follower = first;
        int i = 0;
        while (traveler!=null && i++ < k)
            traveler = traveler.next;
        while (traveler != null){
            traveler = traveler.next;
            follower = follower.next;
        }
        return follower.value;
    }

    public boolean contains(int item){
        Node traveler = first;
        while (traveler != null){
            if (traveler.value == item)
                return true;
            traveler = traveler.next;
        }
        return false;
    }

    public int indexOf(int item){
        int i = 0;
        Node traveler = first;
        while (traveler != null){
            if (traveler.value == item)
                return i;
            traveler = traveler.next;
            i++;
        }
        return -1;
    }

    public boolean isEmpty(){
        return first == null;
    }

    public void printMiddle(){
        if (isEmpty())
            return;
        boolean advance = false;
        Node traveler = first;
        Node follower = first;
        while(traveler.next != null){
            traveler = traveler.next;
            if (advance)
                follower = follower.next;
            advance = !advance;
        }
        System.out.println(follower.value);
        if (advance)
            System.out.println(follower.next.value);
    }

    public boolean hasLoop(){
        if (isEmpty())
            throw new NoSuchElementException();
        boolean advance = false;
        Node traveler = first;
        Node follower = first;
        while(traveler.next != null){
            traveler = traveler.next;
            if (advance)
                follower = follower.next;
            advance = !advance;
            if (traveler == follower)
                return true;
        }
        return false;
    }


}
