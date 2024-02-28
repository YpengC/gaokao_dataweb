package com.wms.common;

import java.util.ArrayList;

public class RandKami {
    public static void main(String[] args) {
        codeRandomCreator(10,10);
    }

    //随机生成卡号
    public static void codeRandomCreator (int number , int length) {
        String code ="";
        ArrayList<String> codeList = new ArrayList<>();
        String[] arr =new String[]{
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
                "W", "X", "Y", "Z"
        };
        for (int i = 0; i < number; i++) {
            for (int j = 0; j <length ; j++) {
                int round =(int) Math.round(Math.random() * (arr.length - 1));
                code += arr[round];
            }
            codeList.add(code);
            code="";
        }
        System.out.println(codeList);
    }

    //随机生成卡密
    public static void codeRandomPassword (int number , int length) {
        String code ="";
        ArrayList<String> codeList = new ArrayList<>();
        String[] arr =new String[]{
                "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
                "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
                "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
                "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
                "W", "X", "Y", "Z"
        };
        for (int i = 0; i < number; i++) {
            for (int j = 0; j <length ; j++) {
                int round =(int) Math.round(Math.random() * (arr.length - 1));
                code += arr[round];
            }
            codeList.add(code);
            code="";
        }
        System.out.println(codeList);
    }
}
