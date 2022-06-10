package com.codewithmosh;

import java.util.Arrays;
import java.util.LinkedList;

public class HashMap2 {

    private class KeyValuePair{
        private int key;
        private String value;
        private KeyValuePair(int key, String value){
            this.key = key;
            this.value = value;
        }
        public String toString(){
            return key+" = "+value;
        }
    }

    private LinkedList<KeyValuePair>[] storage = new LinkedList[10];


    public String toString(){
        return Arrays.toString(storage);
    }

    private int hash(int key){
        int number = key * 3;
        return number % 10;
    }

    public void put(int key, String value){

        int index = hash(key);
        var newPair = new KeyValuePair(key, value);

        if (storage[index]==null) {
            var newLink = new LinkedList<KeyValuePair>();
            newLink.add(newPair);
            storage[index]=newLink;
        } else{
            int i = 0;
            var link = storage[index];
            while (i<link.size()){
                if (link.get(i).key == key) {
                    link.get(i).value = value;
                    return;
                }
                i++;
            }
            link.addFirst(newPair);
        }

    }


}
