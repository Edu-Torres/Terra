package com.codewithmosh;

import java.util.Arrays;
import java.util.NoSuchElementException;

public class Stack2 {
    private int size = 3;
    private int[] st = new int[size];
    int index = 0;

    @Override
    public String toString(){
        if (index == 0)
            return "[]";
        if (index == 1)
            return "[" + st[0] + "]";
        StringBuffer pri = new StringBuffer();
        pri.append("[" + st[0]);
        for (int i = 1; i < index; i++)
            pri.append(", " + st[i]);
        pri.append("]");
        return pri.toString();
    }

    public void push(int n){
        resize();
        st[index] = n;
        index++;
    }

    public int pop(){
        if(isEmpty())
            throw new NoSuchElementException();
        return st[--index];
    }

    public int peek(){
        if(isEmpty())
            throw new NoSuchElementException();
        return st[index - 1];
    }

    public boolean isEmpty(){
        return index == 0;
    }

    private void resize(){
        if (index >= size){
            int[] newst = new int[size * 2];
            for (int i = 0; i < index; i++)
                newst[i] = st[i];
            size += size;
            st = newst;
        }
    }

}
