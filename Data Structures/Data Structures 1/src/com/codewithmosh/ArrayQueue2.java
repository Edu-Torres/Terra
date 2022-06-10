package com.codewithmosh;

import java.util.Arrays;

public class ArrayQueue2 {

    private int front = 0;
    private int rear = 0;
    private int size = 0;
    private int[] store;

    @Override
    public String toString(){
        StringBuffer st = new StringBuffer();
        for (int i = front; i < rear; i++)
            st.append((store[i % store.length]) + "  ");
        return st.toString();

    }

    public ArrayQueue2(int size){
        store = new int[size];
    }

    public boolean isFull(){
        return size == store.length;
    }

    public boolean isEmpty(){
        return size == 0;
    }

    public void enqueue(int item){
        if (isFull())
            throw new IllegalStateException();
        store[rear++ % store.length] = item;
        size++;
    }

    public int dequeue(){
        if (isEmpty())
            throw new IllegalStateException();
        size--;
        return store[front++ % store.length];
    }



}
