package Hackerrank;

import java.io.*;
import java.util.*;

public class Array_2D {

    // Complete the hourglassSum function below.
    static int hourglassSum(int[][] arr) {

        int x = arr.length;
        int y = arr[0].length;
        int max = Integer.MIN_VALUE;

        for (int i = 0; i < x - 2; i++) {
            int sum = 0;
            for (int j = 0; j < y - 2; j++) {
                sum = arr[j][i] + arr[j][i + 1] + arr[j][i + 2] + arr[j + 1][i + 1] + arr[j + 2][i] + arr[j + 2][i + 1]
                        + arr[j + 2][i + 2];
                if (sum > max)
                    max = sum;
            }
        }

        return max;

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {

        int[][] arr = { { -9, -9, -9, 1, 1, 1 }, { 0, -9, 0, 4, 3, 2 }, { -9, -9, -9, 1, 2, 3 }, { 0, 0, 8, 6, 6, 0 },
                { 0, 0, 0, -2, 0, 0 }, { 0, 0, 1, 2, 4, 0 } };

        int[][] arr2 = { { -1, -1, 0, -9, -2, -2 }, { -2, -1, -6, -8, -2, -5 }, { -1, -1, -1, -2, -3, -4 },
                { -1, -9, -2, -4, -4, -5 }, { -7, -3, -3, -2, -9, -9 }, { -1, -3, -1, -2, -4, -5 } };

        int result = hourglassSum(arr2);

        System.out.println(result);

    }
}
