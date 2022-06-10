package com.codewithmosh;

public class Array2 {

    private int[] items;
    private int count;


    public Array2(int size){
        items = new int[size];
    }

    public void insert(int value){
        resizeIfRequired();
        items[count++] = value;
    }

    public void removeAt(int index){
        if(index >= 0 && index < count) {
            for (int i = index; i < count - 1; i++)
                items[i] = items[i + 1];
            --count;
        } else
            throw new IllegalArgumentException();
    }

    public int indexOf(int number){
        for(int i = 0; i < count; i++){
            if(items[i]==number)
                return i;
        }
        return -1;
    }

    public void resizeIfRequired(){
        if(items.length <= count){
            int[] newItems = new int[count*2];
            for (int i = 0; i < items.length; i++)
                newItems[i] = items[i];
            items = newItems;
        }
    }

    public void print() {
        for (int i = 0; i < count; i++)
            System.out.println(items[i]);
    }

    public int max(){
        int answer= items[0];
        for(int nums:items)
            if (answer < nums)
                answer = nums;
        return answer;
    }

    public Array2 intersect(Array2 numbers){
        Array2 answer = new Array2(3);
        for (int i = 0; i < numbers.count; i++)
            if (indexOf(numbers.items[i]) != -1)
                answer.insert(numbers.items[i]);
        return answer;
    }

    public void reverse(){
        int[] reversed = new int[count];
        for (int i = count - 1; i >= 0; i--)
            reversed[count - i - 1] = items[i];
        items = reversed;
    }

    public void insertAt(int item, int index){
        if (index < 0 || index > count)
            throw new IllegalArgumentException();
        resizeIfRequired();
        for (int i = count; i > index; i--)
            items[i] = items[i-1];
        items[index] = item;
        count++;
    }


}
