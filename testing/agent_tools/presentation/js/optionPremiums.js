var mbdA71 = 0;

//RATES WL
const rMNTU = [10.21, 10.57, 10.95, 11.34, 11.79, 12.25, 12.73, 13.3, 13.95, 14.65, 15.38, 16.16, 17.01, 17.94, 18.91, 19.95, 21.05, 22.19, 23.29, 24.47, 25.73, 27.04, 28.43, 29.89, 31.44, 33.04, 34.74, 36.61, 38.57, 40.68, 42.9, 45.26, 47.78, 50.46, 53.28, 56.29, 59.48, 62.74, 66.13, 69.68, 73.48, 77.51];
const prMNTU = [8.9, 9.21, 9.53, 9.9, 10.27, 10.68, 11.11, 11.61, 12.16, 12.76, 13.4, 14.08, 14.84, 15.65, 16.46, 17.38, 18.35, 19.32, 20.28, 21.33, 22.44, 23.56, 24.76, 26.05, 27.37, 28.8, 30.28, 31.89, 33.6, 35.44, 37.4, 39.43, 41.62, 43.94, 46.44, 49.05, 51.81, 54.65, 57.59, 60.7, 64.01, 67.52];
const exMNTU = [7.73, 8, 8.3, 8.57, 8.94, 9.27, 9.64, 10.06, 10.54, 11.06, 11.63, 12.24, 12.88, 13.57, 14.3, 15.11, 15.92, 16.77, 17.62, 18.51, 19.46, 20.45, 21.51, 22.61, 23.77, 24.98, 26.27, 27.69, 29.17, 30.79, 32.46, 34.24, 36.14, 38.17, 40.31, 42.57, 45, 47.47, 50.01, 52.72, 55.58, 58.63];
const slMNTU = [6.59, 6.76, 6.95, 7.2, 7.41, 7.67, 7.96, 8.28, 8.64, 9.04, 9.47, 9.94, 10.43, 10.85, 11.51, 12.1, 12.72, 13.39, 14.09, 14.82, 15.61, 16.46, 17.36, 18.33, 19.36, 20.45, 21.58, 22.72, 23.87, 25.04, 26.29, 27.61, 29.05, 30.56, 32.22, 34.01, 36, 38.17, 40.59, 43.22, 46.07, 49.12];
const rMTU = [12.81, 13.27, 13.75, 14.29, 14.82, 15.43, 16.07, 16.77, 17.56, 18.43, 19.33, 20.3, 21.36, 22.48, 23.67, 24.96, 26.3, 27.75, 29.35, 31.03, 32.82, 34.7, 36.69, 38.82, 41.09, 43.47, 46.01, 48.6, 51.23, 54.01, 56.96, 60.12, 63.43, 67.01, 70.77, 74.74, 78.81, 83.02, 87.33, 91.76, 96.42, 101.37];
const prMTU = [11.16, 11.56, 11.96, 12.43, 12.93, 13.45, 13.99, 14.62, 15.29, 16.05, 16.84, 17.68, 18.6, 19.59, 20.63, 21.75, 22.92, 24.17, 25.58, 27.03, 28.58, 30.22, 31.97, 33.83, 35.78, 37.87, 40.09, 42.34, 44.64, 47.05, 49.62, 52.37, 55.27, 58.37, 61.66, 65.12, 68.69, 72.33, 76.05, 79.89, 84.01, 88.29];
const exMTU = [9.68, 10.02, 10.41, 10.8, 11.21, 11.68, 12.14, 12.68, 13.28, 13.94, 14.62, 15.36, 16.16, 17, 17.89, 18.89, 19.89, 20.98, 22.22, 23.46, 24.84, 26.25, 27.75, 29.38, 31.08, 32.88, 34.8, 36.74, 38.77, 40.85, 43.08, 45.47, 48, 50.67, 53.49, 56.43, 59.49, 62.7, 66, 69.43, 72.99, 76.69];
const slMTU = [8.43, 8.61, 8.83, 9.08, 9.36, 9.69, 10.07, 10.51, 11.03, 11.62, 12.26, 12.95, 13.66, 14.4, 15.17, 15.99, 16.88, 17.87, 18.97, 20.14, 21.41, 22.74, 24.15, 25.65, 27.21, 28.83, 30.51, 32.2, 33.91, 35.63, 37.43, 39.31, 41.28, 43.36, 45.55, 47.88, 50.41, 53.21, 56.29, 59.64, 63.23, 67.02];
const rFNTU = [9.2, 9.55, 9.91, 10.29, 10.67, 11.1, 11.57, 12.08, 12.65, 13.28, 13.95, 14.66, 15.39, 16.14, 16.91, 17.71, 18.51, 19.33, 20.15, 20.99, 21.86, 22.73, 23.6, 24.47, 25.35, 26.29, 27.39, 28.71, 30.32, 32.17, 34.2, 36.37, 38.7, 41.14, 43.66, 46.28, 49.01, 51.8, 54.67, 57.62, 60.64, 63.71];
const prFNTU = [8.01, 8.32, 8.63, 8.96, 9.3, 9.67, 10.07, 10.52, 11.01, 11.58, 12.16, 12.77, 13.4, 14.05, 14.73, 15.42, 16.12, 16.83, 17.55, 18.27, 19.02, 19.78, 20.54, 21.3, 22.08, 22.91, 23.87, 25, 26.41, 28.01, 29.8, 31.69, 33.68, 35.78, 38.04, 40.34, 42.69, 45.11, 47.57, 50.09, 52.72, 55.47];
const exFNTU = [6.95, 7.22, 7.49, 7.78, 8.07, 8.4, 8.75, 9.14, 9.57, 10.04, 10.54, 11.08, 11.64, 12.2, 12.78, 13.39, 14, 14.62, 15.25, 15.88, 16.53, 17.19, 17.85, 18.51, 19.17, 19.88, 20.72, 21.72, 22.94, 24.33, 25.87, 27.51, 29.26, 31.11, 33.05, 35.07, 37.14, 39.27, 41.43, 43.64, 45.91, 48.23];
const slFNTU = [5.96, 6.14, 6.33, 6.52, 6.73, 6.95, 7.19, 7.45, 7.73, 8.04, 8.37, 8.7, 9.07, 9.47, 9.91, 10.35, 10.81, 11.28, 11.76, 12.24, 12.73, 13.27, 13.83, 14.43, 15.19, 16, 16.88, 17.76, 18.64, 19.52, 20.42, 21.43, 22.59, 23.91, 25.39, 27.01, 28.7, 30.46, 32.25, 34.11, 36.12, 38.31];
const rFTU = [11.54, 11.96, 12.41, 12.86, 13.35, 13.88, 14.47, 15.11, 15.83, 16.59, 17.42, 18.29, 19.23, 20.26, 21.34, 22.46, 23.68, 24.92, 26.17, 27.5, 28.88, 30.35, 31.89, 33.49, 35.19, 37.01, 38.9, 40.82, 42.77, 44.8, 46.97, 49.24, 51.61, 54.15, 56.79, 59.61, 62.55, 65.61, 68.85, 72.21, 75.82, 79.6];
const prFTU = [10.05, 10.43, 10.82, 11.2, 11.64, 12.1, 12.61, 13.16, 13.77, 14.45, 15.18, 15.93, 16.76, 17.64, 18.57, 19.58, 20.64, 21.69, 22.8, 23.96, 25.17, 26.42, 27.76, 29.18, 30.66, 32.22, 33.89, 35.56, 37.25, 39.04, 40.92, 42.89, 44.95, 47.17, 49.51, 51.93, 54.51, 57.15, 60, 62.92, 66.05, 69.33];
const exFTU = [8.73, 9.05, 9.4, 9.73, 10.11, 10.49, 10.94, 11.42, 11.96, 12.54, 13.18, 13.84, 14.54, 15.31, 16.14, 16.99, 17.9, 18.84, 19.79, 20.79, 21.84, 22.95, 24.11, 25.35, 26.63, 27.97, 29.41, 30.86, 32.35, 33.89, 35.54, 37.23, 39.05, 40.95, 42.97, 45.1, 47.32, 49.62, 52.07, 54.63, 57.34, 60.21];
const slFTU = [7.15, 7.35, 7.56, 7.8, 8.05, 8.31, 8.63, 8.97, 9.36, 9.81, 10.29, 10.78, 11.32, 11.87, 12.44, 13.03, 13.67, 14.35, 15.07, 15.82, 16.6, 17.39, 18.29, 19.23, 20.2, 21.23, 22.29, 23.35, 24.4, 25.48, 26.59, 27.81, 29.15, 30.65, 32.28, 34.06, 35.91, 37.87, 39.86, 41.96, 44.21, 46.69];

//RATES 10RC
const tenrcmntu = [3.7, 3.71, 3.72, 3.74, 3.76, 3.78, 3.8, 3.83, 3.89, 3.93, 3.97, 4.01, 4.05, 4.11, 4.19, 4.27, 4.4, 4.59, 4.81, 5.07, 5.38, 5.73, 6.12, 6.55, 7.02, 7.55, 8.14, 8.8, 9.51, 10.31, 11.18, 12.14, 13.19, 14.33, 15.59, 16.99, 18.61, 20.45, 22.53, 24.84, 27.36, 30.06];
const tenrcmtu = [4.71, 4.79, 4.85, 4.91, 5, 5.07, 5.15, 5.25, 5.34, 5.47, 5.58, 5.72, 5.86, 6.01, 6.17, 6.36, 6.62, 6.92, 7.29, 7.7, 8.19, 8.75, 9.38, 10.08, 10.85, 11.72, 12.66, 13.72, 14.9, 16.17, 17.54, 18.97, 20.48, 22.01, 23.68, 25.55, 27.65, 30.07, 32.82, 35.87, 39.2, 42.78];
const tenrcfntu = [3.18, 3.2, 3.21, 3.22, 3.24, 3.26, 3.27, 3.29, 3.32, 3.36, 3.39, 3.44, 3.48, 3.53, 3.58, 3.69, 3.78, 3.93, 4.13, 4.36, 4.62, 4.91, 5.24, 5.6, 5.99, 6.42, 6.91, 7.47, 8.09, 8.77, 9.52, 10.33, 11.16, 12.03, 13, 14.11, 15.39, 16.87, 18.59, 20.51, 22.61, 24.89];
const tenrcftu = [4.37, 4.42, 4.47, 4.55, 4.62, 4.7, 4.8, 4.88, 5, 5.1, 5.23, 5.34, 5.46, 5.58, 5.7, 5.87, 6.05, 6.31, 6.58, 6.92, 7.32, 7.78, 8.28, 8.85, 9.49, 10.17, 10.93, 11.76, 12.65, 13.61, 14.64, 15.75, 16.92, 18.11, 19.44, 20.91, 22.56, 24.51, 26.71, 29.17, 31.84, 34.77];

//RATES ADB
const adb = [1, 1.25];

//RATES CHILD RIDER
const childRiderRate = 7.5;

//RATES SENIOR LEVEL AND GRADED WL
const srwlmntu = [86.12, 90.93, 96.03, 101.46, 107.2, 113.53, 120.44, 127.85, 135.77, 144.29, 153.45, 164.79, 177, 190.08, 204.09, 218.97, 234.76, 251.67, 269.78, 289.34, 309.85];
const srwlmtu = [112.22, 118.05, 124.24, 130.76, 137.65, 144.95, 154.12, 163.89, 174.34, 185.57, 197.64, 210.58, 224.41, 239.09, 254.59, 270.94];
const srwlfntu = [70.4, 73.85, 77.51, 81.55, 86.07, 91.18, 97.33, 104.15, 111.65, 119.83, 128.68, 138.11, 148.26, 159.15, 170.82, 183.29, 196.77, 211.06, 226.21, 242.19, 259.03];
const srwlftu = [87.99, 92.46, 97.19, 102.17, 107.45, 113.37, 120.08, 127.31, 134.96, 143.19, 152.03, 161.54, 171.69, 182.46, 193.84, 205.83];
const srgrmntu = [83.61, 88.28, 93.24, 98.5, 104.08, 110.22, 116.93, 124.12, 131.81, 140.09, 148.98, 159.99, 171.85, 184.54, 198.15, 212.6, 227.93, 244.34, 261.93, 280.92, 300.82];
const srgrmtu = [108.96, 114.62, 120.62, 126.96, 133.64, 140.73, 149.63, 159.12, 169.26, 180.16, 191.88, 204.45, 217.87, 232.12, 247.18, 263.05];
const srgrfntu = [68.35, 71.7, 75.26, 79.17, 83.56, 88.53, 94.49, 101.12, 108.4, 116.34, 124.94, 134.09, 143.94, 154.52, 165.84, 177.96, 191.04, 204.91, 219.62, 235.13, 251.48];
const srgrftu = [85.43, 89.77, 94.35, 99.2, 104.32, 110.07, 116.59, 123.59, 131.03, 139.02, 147.6, 156.84, 166.69, 177.14, 188.19, 199.83];


//NILICO RATES

//ADB Rider
//Male and Female ages 5–64
//Price changes at ages 50, 60
//Limit x5 Base Plan up to $200k
const NILadb = [1, 1.25, 1.5];

//WHOLE LIFE
//Male and Female ages 18-70
const NILrM = [8.86, 9.04, 9.23, 9.42, 9.63, 9.83, 10.04, 10.27, 10.49, 10.73, 10.98, 11.23, 11.48, 11.68, 11.87, 12.1, 12.38, 12.65, 12.9, 13.16, 13.43, 13.74, 14.07, 14.3, 14.39, 14.91, 15.46, 16.05, 16.67, 17.31, 17.93, 18.53, 19.15, 19.81, 20.5, 21.35, 22.36, 23.43, 24.55, 25.72, 26.96, 28.26, 29.62, 31.05, 32.52, 34.01, 35.58, 37.25, 39, 40.87, 42.84, 44.93, 47.15, 49.49, 51.98, 54.6, 57.4, 60.36, 63.51, 66.86, 70.44, 74.27, 78.36, 82.71, 87.35, 92.16, 97.23, 102.6, 108.32, 114.45, 120.99];
const NILrF = [7.34, 7.52, 7.7, 7.91, 8.13, 8.35, 8.6, 8.83, 9.11, 9.38, 9.68, 9.98, 10.27, 10.57, 10.84, 11.1, 11.37, 11.64, 11.89, 12.14, 12.43, 12.75, 13.12, 13.52, 13.92, 14.36, 14.82, 15.31, 15.83, 16.38, 16.96, 17.58, 18.25, 18.95, 19.7, 20.49, 21.34, 22.25, 23.21, 24.28, 25.41, 26.59, 27.85, 29.19, 30.58, 32.05, 33.58, 35.19, 36.9, 38.76, 40.71, 42.68, 44.86, 47.15, 49.57, 52.12, 54.81, 57.63, 60.61, 63.73, 67.01, 70.46, 74.06, 78.01, 82.15, 86.51, 91.07, 95.65, 100.8, 106.4, 112.48];
const NILprM = [4.76, 4.91, 5.04, 5.22, 5.39, 5.55, 5.74, 5.93, 6.15, 6.38, 6.65, 6.95, 7.26, 7.57, 7.89, 8.19, 8.53, 8.79, 9.08, 9.36, 9.66, 10.01, 10.41, 10.83, 11.27, 11.77, 12.33, 12.9, 13.51, 14.15, 14.84, 15.64, 16.46, 17.35, 18.28, 19.25, 20.21, 21.22, 22.23, 23.3, 24.42, 25.61, 26.92, 28.28, 29.73, 31.19, 32.67, 34.24, 35.89, 37.62, 39.45, 41.39, 43.42, 45.56, 47.79, 50.14, 52.6, 55.2, 57.93, 60.83, 63.89, 67.13, 70.58, 74.19, 78, 82.33, 87.21, 92.42, 97.99, 103.98, 110.41];
const NILprF = [4.29, 4.41, 4.54, 4.7, 4.84, 5.02, 5.22, 5.42, 5.65, 5.9, 6.15, 6.42, 6.72, 7, 7.3, 7.6, 7.89, 8.19, 8.49, 8.8, 9.12, 9.47, 9.82, 10.22, 10.65, 11.12, 11.63, 12.19, 12.8, 13.46, 14.14, 14.89, 15.68, 16.52, 17.42, 18.34, 19.26, 20.22, 21.24, 22.31, 23.44, 24.66, 25.9, 27.22, 28.61, 30.02, 31.46, 32.95, 34.54, 36.21, 37.96, 39.83, 41.77, 43.84, 46, 48.28, 50.64, 53.13, 55.76, 58.55, 61.51, 64.63, 67.91, 71.4, 75.07, 79.23, 83.93, 88.95, 94.32, 100.07, 106.26];

//Male ages 18-76
//Female ages 18-73
const NILexMNTU = [7.03, 7.28, 7.54, 7.81, 8.11, 8.42, 8.77, 9.15, 9.59, 10.07, 10.57, 11.12, 11.72, 12.34, 13.01, 13.67, 14.36, 15.04, 15.73, 16.49, 17.29, 18.13, 19.02, 19.99, 21.02, 22.11, 23.24, 24.43, 25.68, 27.02, 28.43, 29.85, 31.35, 33.11, 34.98, 36.95, 39.03, 41.17, 43.39, 45.72, 48.1, 50.61, 53.15, 56.13, 59.29, 62.62, 66.18, 70.08, 74.36, 78.92, 84.01, 89.8, 95.91, 102.31, 109.46, 117.08, 125.2, 133.79, 142.88];
const NILexMTU = [8.52, 8.85, 9.2, 9.54, 9.92, 10.33, 10.74, 11.21, 11.75, 12.33, 12.94, 13.59, 14.29, 15.04, 15.8, 16.61, 17.47, 18.39, 19.4, 20.46, 21.59, 22.76, 24.02, 25.31, 26.63, 28, 29.44, 30.92, 32.5, 34.1, 35.74, 37.47, 39.29, 41.23, 43.27, 45.41, 47.7, 50.11, 36.89, 55.4, 58.28, 61.37, 64.66, 68.17, 71.91, 75.92, 80.16, 84.7, 89.54, 94.64, 100.16, 106.13, 112.54, 119.44, 126.84, 134.72];
const NILexFNTU = [6.32, 6.48, 6.73, 7.02, 7.35, 7.73, 8.13, 8.53, 8.94, 9.36, 9.78, 10.22, 10.65, 11.1, 11.56, 12.03, 12.52, 13.05, 13.6, 14.18, 14.8, 15.47, 16.18, 16.96, 17.77, 18.65, 19.6, 20.62, 21.7, 22.85, 24.07, 25.38, 26.75, 28.21, 29.76, 31.4, 33.12, 34.96, 57, 38.93, 41.09, 43.39, 45.85, 48.47, 51.26, 54.25, 57.48, 60.97, 64.74, 68.86, 73.32, 78.22, 83.6, 89.51, 96.01, 103.2, 111.15, 119.96, 129.7];
const NILexFTU = [7.53, 7.86, 8.2, 8.56, 8.91, 9.29, 9.68, 10.11, 10.58, 11.09, 11.64, 12.24, 12.87, 13.55, 14.27, 15.03, 15.84, 16.67, 17.51, 18.39, 19.32, 20.3, 21.33, 22.42, 23.55, 24.75, 26.02, 27.31, 28.61, 29.97, 31.43, 32.93, 34.53, 36.21, 38, 39.88, 41.85, 43.9, 55.4, 48.32, 50.59, 53, 55.4, 58.21, 61.17, 64.3, 67.62, 71.35, 75.6, 80.11, 84.94, 89.91, 95.23, 100.7, 107.03, 113.74];
//EX coverage limits for MTU
const exLimits = {37: 91365, 38: 72568, 39: 60096, 40: 50150, 41: 43572, 42: 38491, 43: 34680, 44: 31426, 45: 28880, 46: 26542, 47: 24850, 48: 23518, 49: 22348, 50: 21272, 51: 20187, 52: 19228, 53: 18340, 54: 17447, 55: 16622, 56: 15801, 57: 15019, 58: 14295, 59: 13545, 60: 12871, 61: 12201, 62: 11568, 63: 10958, 64: 10387, 65: 9819, 66: 9290, 67: 8844, 68: 8375, 69: 7896, 70: 7452, 71: 7018, 72: 6609, 73: 6228};

//Male ages 18-76
//Female ages 18-73
//18-29 $150,000 Minimum
//30-76 $100,000 Minimum
//Add $25.00 Volume Adjustment Factor
const NILslMNTU = [5.62, 5.77, 5.95, 6.16, 6.41, 6.68, 6.99, 7.31, 7.67, 8.05, 8.46, 8.89, 9.34, 9.82, 10.32, 10.84, 11.4, 11.98, 12.6, 13.26, 13.94, 14.67, 15.44, 16.27, 17.15, 18.08, 19.06, 20.13, 21.26, 22.47, 23.77, 25.16, 26.63, 28.22, 29.94, 31.76, 33.72, 35.82, 38.07, 40.47, 43.04, 45.79, 48.73, 51.87, 55.2, 58.78, 62.57, 66.62, 70.93, 75.5, 80.36, 85.51, 90.99, 96.78, 102.92, 109.4, 116.27, 123.51, 131.16];
const NILslMTU = [7.41, 7.56, 7.73, 7.95, 8.24, 8.56, 8.95, 9.38, 9.86, 10.38, 10.94, 11.56, 12.24, 13, 13.78, 14.52, 15.31, 16.15, 17.02, 17.9, 18.82, 19.79, 20.8, 21.92, 23.1, 24.31, 25.52, 26.74, 27.95, 29.22, 30.5, 31.98, 33.52, 35.33, 37.23, 39.25, 41.39, 43.66, 46.17, 49.09, 51.65, 54.36, 57.26, 60.34, 63.64, 67.16, 70.9, 74.89, 79.15, 83.7, 88.59, 93.84, 99.49, 105.56, 112.08, 118.64];
const NILslFNTU = [5.29, 5.38, 5.48, 5.58, 5.7, 5.87, 6.08, 6.33, 6.61, 6.92, 7.25, 7.6, 7.99, 8.38, 8.79, 9.22, 9.65, 10.11, 10.6, 11.09, 11.6, 12.14, 12.7, 13.29, 13.92, 14.58, 15.28, 16.03, 16.82, 17.68, 18.61, 19.61, 20.69, 21.85, 23.12, 24.49, 25.97, 27.6, 29.34, 31.25, 33.32, 35.56, 37.98, 40.61, 43.44, 46.51, 49.83, 53.4, 57.24, 61.38, 65.82, 70.59, 75.7, 81.17, 87.02, 93.27, 99.95, 107.06, 114.63];
const NILslFTU = [6.12, 6.24, 6.41, 6.61, 6.85, 7.15, 7.46, 7.82, 8.21, 8.62, 9.08, 9.55, 10.06, 10.6, 11.14, 11.73, 12.33, 12.96, 13.62, 14.29, 15.01, 15.74, 16.51, 17.3, 18.14, 19.02, 19.94, 20.9, 21.92, 22.99, 24.14, 25.35, 26.64, 28.03, 29.51, 31.1, 32.8, 34.64, 36.62, 38.76, 41.07, 43.57, 46.26, 49.17, 52.32, 55.72, 59.4, 63.38, 67.67, 72.31, 77.31, 82.71, 88.54, 94.8, 101.55, 108.8];

//NILICO TERM RATES

//4 YEAR RENEWABLE AND CONVERTIBLE
//Male and Female ages 18-65
//$100,000 Minimum
const NIL4rcMNTU = [1.55, 1.55, 1.55, 1.55, 1.56, 1.57, 1.58, 1.59, 1.62, 1.63, 1.64, 1.65, 1.67, 1.68, 1.69, 1.7, 1.72, 1.81, 1.93, 2.06, 2.21, 2.37, 2.55, 2.74, 2.95, 3.18, 3.44, 3.72, 4.35, 4.72, 5.15, 5.63, 6.18, 6.8, 7.5, 8.26, 9.09, 10, 11, 12.12, 13.38, 14.8, 16.4, 18.2, 20.18, 22.34, 24.68];
const NIL4rcMTU = [2.4, 2.4, 2.4, 2.4, 2.41, 2.43, 2.44, 2.46, 2.5, 2.51, 2.52, 2.54, 2.61, 2.71, 2.83, 2.98, 3.17, 3.4, 3.69, 4.02, 4.4, 4.82, 5.29, 5.8, 6.36, 6.95, 7.58, 8.26, 9.77, 10.64, 11.51, 12.38, 13.28, 14.17, 15.1, 16.05, 17.26, 18.79, 20.42, 22.21, 24.19, 26.41, 28.89, 31.61, 34.54, 37.64, 40.9];
const NIL4rcFNTU = [1.25, 1.25, 1.25, 1.25, 1.27, 1.28, 1.29, 1.3, 1.33, 1.34, 1.35, 1.36, 1.38, 1.43, 1.44, 1.45, 1.51, 1.61, 1.72, 1.85, 2, 2.17, 2.34, 2.51, 2.68, 2.87, 3.06, 3.27, 3.74, 4.02, 4.32, 4.66, 5.03, 5.43, 5.86, 6.29, 6.72, 7.17, 7.64, 8.19, 8.84, 9.64, 10.6, 11.71, 12.95, 14.26, 15.62];
const NIL4rcFTU = [1.57, 1.57, 1.57, 1.58, 1.6, 1.61, 1.62, 1.63, 1.69, 1.75, 1.82, 1.88, 1.95, 2.02, 2.11, 2.19, 2.24, 2.37, 2.59, 2.84, 3.12, 3.43, 3.75, 4.08, 4.41, 4.66, 4.82, 5.08, 5.83, 6.25, 6.72, 7.22, 7.77, 8.36, 8.97, 9.57, 10.16, 10.75, 11.36, 12.04, 12.88, 13.91, 15.15, 16.58, 18.15, 19.78, 21.43];

//10 YEAR RENEWABLE AND CONVERTIBLE
//Male and Female ages 15-58
//CAN BE SOLD AS A POLICY ADD $25 ANNUAL POLICY FEE ($2.09 MBD)
const NILtenrcM = [3.86, 3.87, 3.89, 3.9, 3.91, 3.92, 3.93, 3.94, 3.95, 3.96, 4, 4.06, 4.13, 4.19, 4.26, 4.33, 4.39, 4.46, 4.55, 4.64, 4.75, 4.88, 5.07, 5.34, 5.68, 6.09, 6.59, 7.17, 7.84, 8.61, 9.45, 10.38, 11.4, 12.5, 13.65, 14.87, 16.15, 17.47, 18.83, 20.21, 21.62, 23.01, 24.38, 25.73];
const NILtenrcF = [3.49, 3.5, 3.5, 3.51, 3.52, 3.53, 3.54, 3.55, 3.56, 3.57, 3.6, 3.66, 3.73, 3.78, 3.83, 3.9, 3.96, 4.02, 4.1, 4.17, 4.26, 4.39, 4.57, 4.81, 5.11, 5.48, 5.93, 6.46, 7.07, 7.75, 8.52, 9.35, 10.26, 11.25, 12.29, 13.38, 14.52, 15.72, 16.95, 18.2, 19.46, 20.71, 21.95, 23.15];

//20 YEAR RENEWABLE AND CONVERTIBLE
//Male and Female ages 18-50
//CAN BE SOLD AS A POLICY ADD $10 ANNUAL POLICY FEE ($0.84 MBD)			
const NILtwentyrcM = [4.23, 4.24, 4.26, 4.32, 4.39, 4.48, 4.59, 4.7, 4.83, 4.98, 5.15, 5.34, 5.58, 5.84, 6.15, 6.5, 6.89, 7.3, 7.73, 8.2, 8.74, 9.37, 10.13, 11.05, 12.1, 13.28, 14.58, 16.02, 17.6, 19.3, 21.14, 23.1, 25.2];
const NILtwentyrcF = [3.85, 3.86, 3.87, 3.9, 3.94, 4, 4.08, 4.19, 4.31, 4.45, 4.61, 4.8, 5.01, 5.25, 5.51, 5.82, 6.16, 6.53, 6.93, 7.37, 7.89, 8.47, 9.17, 9.98, 10.91, 11.94, 13.07, 14.32, 15.68, 17.15, 18.72, 20.41, 22.21];

//SPOUSE RIDER
//Male ages 18-50
//Female ages 18-53
const NILspouseM = [4.19, 4.34, 4.5, 4.68, 4.87, 5.08, 5.32, 5.59, 5.87, 6.19, 6.55, 6.93, 7.35, 7.83, 8.34, 8.91, 9.54, 10.25, 11.03, 11.89, 12.83, 13.86, 14.99, 16.24, 17.59, 19.08, 20.72, 22.51, 24.47, 26.62, 28.98, 31.56, 34.38];
const NILspouseF = [3.77, 3.91, 4.05, 4.21, 4.38, 4.57, 4.79, 5.03, 5.29, 5.58, 5.89, 6.24, 6.62, 7.04, 7.51, 8.02, 8.59, 9.22, 9.93, 10.7, 11.55, 12.48, 13.5, 14.61, 15.83, 17.18, 18.65, 20.26, 22.02, 23.95, 26.08, 28.41, 30.94, 33.72, 36.79, 40.13];

//15 YEAR DECREASING TERM
//Male and Female ages 20-60
const NIL15dcM = [2.93, 2.96, 3, 3.05, 3.11, 3.2, 3.32, 3.45, 3.61, 3.79, 3.97, 4.18, 4.39, 4.64, 4.89, 5.2, 5.51, 5.86, 6.25, 6.67, 7.14, 7.64, 8.21, 8.84, 9.51, 10.26, 11.08, 11.97, 12.96, 14.05, 15.24, 16.54, 17.96, 19.49, 21.14, 22.97, 24.98, 27.16, 29.52, 32.21, 35.13];
const NIL15dcF = [1.93, 1.98, 2.05, 2.12, 2.19, 2.27, 2.36, 2.47, 2.57, 2.68, 2.8, 2.95, 3.1, 3.27, 3.43, 3.63, 3.84, 4.08, 4.33, 4.6, 4.89, 5.22, 5.55, 5.94, 6.35, 6.8, 7.29, 7.81, 8.39, 9.01, 9.68, 10.41, 11.21, 12.09, 13.02, 14.05, 57, 16.37, 17.68, 19.11, 20.66];

//30 YEAR DECREASING TERM
//Male and Female ages 20-50
const NIL30dcM = [3.82, 3.83, 3.89, 3.96, 4.06, 4.21, 4.41, 4.63, 4.88, 5.16, 5.47, 5.8, 6.16, 6.56, 7, 7.48, 7.99, 8.57, 9.2, 9.88, 10.63, 11.45, 12.35, 13.32, 14.4, 15.58, 16.87, 18.28, 19.82, 21.51, 23.36];
const NIL30dcF = [2.56, 2.65, 2.73, 2.82, 2.93, 3.06, 3.21, 3.36, 3.52, 3.69, 3.86, 4.06, 4.28, 4.54, 4.81, 5.1, 5.44, 5.81, 6.21, 6.65, 7.14, 7.69, 8.28, 8.95, 9.68, 10.48, 11.37, 12.36, 13.44, 14.64, 15.96];

//PLAN TWO IS RECOMMENDED AND ONE IS BASIC
function autoRecBasic(plan) {
	var state = document.getElementById("state2").value;
	var ipCheckboxA = document.getElementById('ipCheckboxA').checked;
	var ipCheckboxB = document.getElementById('ipCheckboxB').checked;
	var a71CheckboxA = document.getElementById('a71CheckboxA').checked;
	var a71CheckboxB = document.getElementById('a71CheckboxB').checked;
	
	document.getElementById('oneHourButton').textContent = 'BASIC';
	document.getElementById('twoHourButton').textContent = 'RECOMMENDED';

  // Group A Variables
  var hourlyA = Number(document.getElementById("optionHourlyInputA").value.replace(/[^0-9]/g, ""));
  var ageInputA = Number(document.getElementById("dobTextA").textContent);

  // Group B Variables
  var hourlyB = Number(document.getElementById("optionHourlyInputB").value.replace(/[^0-9]/g, ""));
  var ageInputB = Number(document.getElementById("dobTextB").textContent);
  var spouseLifeCheckbox = document.getElementById('spouseLifeCheckbox');
  var spouseName2 = document.getElementById('spouseName2').value;
	
  var needNameInputC = document.getElementById('needNameInputC').value;
  var childRiderCheckbox = document.getElementById('childRiderCheckbox');

	if (spouseName2 === '') {
		document.getElementById('wlInputTwoB').value = '';
		document.getElementById('tenrcInputTwoB').value = '';
		document.getElementById('wlInputOneB').value = '';
		document.getElementById('tenrcInputOneB').value = '';
	}

childVisibility();
	
  // Function to calculate the value based on age
  function calculateValueByAge(age) {
    // Define the chartFE with age and corresponding values
    var chartFE = {
      80: 10000, 79: 10500, 78: 11000, 77: 11500, 76: 12000, 75: 12500, 74: 13000, 73: 13500, 72: 14000, 71: 15000, 70: 15500, 69: 16000, 68: 16500, 67: 17500, 66: 18000, 65: 18500, 64: 19500, 63: 20000, 62: 22000, 61: 22500, 60: 23000, 59: 23500, 58: 24500, 57: 25000, 56: 26500, 55: 27500, 54: 30000, 53: 30000, 52: 35000, 51: 35000, 50: 35000, 49: 35000, 48: 36500, 47: 38000, 46: 40000, 45: 41500, 44: 42500, 43: 45000, 42: 46500, 41: 48000, 40: 50000, 39: 52500, 38: 55000, 37: 60000, 36: 60000, 35: 61500, 34: 63500, 33: 65000, 32: 68500, 31: 70000, 30: 75000, 29: 77500, 28: 80000, 27: 82500, 26: 85000, 25: 90000, 24: 95000, 23: 100000, 22: 120000, 21: 120000, 20: 120000, 19: 120000, 18: 120000
    };


    // Default value if age is not found in the chartFE
    var defaultValue = 0;

    // Check if the age exists in the chartFE, if not, use the default value
    return chartFE.hasOwnProperty(age) ? chartFE[age] : defaultValue;
  }
	
  // Function to calculate the value based on age
  function calculateHalfValueByAge(age) {
    var chartHalfFE = {
  80: 5000, 79: 5250, 78: 5500, 77: 5750, 76: 6000, 75: 6250, 74: 6500, 73: 6750, 72: 7000, 71: 7500, 70: 7750, 69: 8000, 68: 8250, 67: 8750, 66: 9000, 65: 9250, 64: 9750, 63: 10000, 62: 11000, 61: 11250, 60: 11500, 59: 11750, 58: 12250, 57: 12500, 56: 13250, 55: 13750, 54: 15000, 53: 15000, 52: 17500, 51: 17500, 50: 17500, 49: 17500, 48: 18250, 47: 19000, 46: 20000, 45: 20750, 44: 21250, 43: 22500, 42: 23250, 41: 24000, 40: 25000, 39: 26250, 38: 27500, 37: 30000, 36: 30000, 35: 35000, 34: 35000, 33: 35000, 32: 35000, 31: 35000, 30: 37500, 29: 38750, 28: 40000, 27: 41250, 26: 42500, 25: 45000, 24: 47500, 23: 50000, 22: 60000, 21: 60000, 20: 60000, 19: 60000, 18: 60000
};

    var defaultHalfValue = 0;

    return chartHalfFE.hasOwnProperty(age) ? chartHalfFE[age] : defaultHalfValue;
  }

  // Apply the value to wlInputA based on ageInputA
  var calculatedValueA = calculateValueByAge(ageInputA);
  var calculatedValueB = calculateValueByAge(ageInputB);
  var calculatedHalfValueA = calculateHalfValueByAge(ageInputA);
  var calculatedHalfValueB = calculateHalfValueByAge(ageInputB);
  var calculatedIncomeA;
  var calculatedIncomeB;
	if (plan === 'REC') {
		if (hourlyA > 0 && ipCheckboxA && (spouseName2 !== '' || needNameInputC !== '')) {
			if (ageInputA >= 18 && ageInputA < 30) {
			calculatedIncomeA = formatFaceAmount((hourlyA * 10000), 'en-US', 'USD');
			} else if (ageInputA >= 30 && ageInputA < 35) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 8000), 'en-US', 'USD');
			} else if (ageInputA >= 35 && ageInputA < 40) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
			} else if (ageInputA >= 40 && ageInputA < 45) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
			} else if (ageInputA >= 45 && ageInputA < 50) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
			} else if (ageInputA >= 50) {
            calculatedIncomeA = "";
			}
		} else {
			calculatedIncomeA = "";
		}
		if (hourlyB > 0 && ipCheckboxB) {
			if (ageInputB >= 18 && ageInputB < 30) {
			calculatedIncomeB = formatFaceAmount((hourlyB * 10000), 'en-US', 'USD');
			} else if (ageInputB >= 30 && ageInputB < 35) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 8000), 'en-US', 'USD');
			} else if (ageInputB >= 35 && ageInputB < 40) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
			} else if (ageInputB >= 40 && ageInputB < 45) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
			} else if (ageInputB >= 45 && ageInputB < 50) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
			} else if (ageInputB >= 50) {
            calculatedIncomeB = "";
			}
		} else {
			calculatedIncomeB = "";
			
		}
      document.getElementById('wlInputTwoA').value = formatFaceAmount(calculatedValueA, 'en-US', 'USD');
      document.getElementById('tenrcInputTwoA').value = calculatedIncomeA;
      document.getElementById('adbInputTwoA').value = formatFaceAmount(200000, 'en-US', 'USD');
//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
      document.getElementById("valueSelectTwo").querySelector("option[value='500']").selected = true;
      } else {
          document.getElementById("valueSelectTwo").querySelector("option[value='0']").selected = true;
		}
		
	if (spouseLifeCheckbox.checked) {
      document.getElementById('wlInputTwoB').value = formatFaceAmount(calculatedValueB, 'en-US', 'USD');
      document.getElementById('tenrcInputTwoB').value = calculatedIncomeB;
      document.getElementById('adbInputTwoB').value = formatFaceAmount(200000, 'en-US', 'USD');
	}
if (childRiderCheckbox.checked) {
	addChildRider('childRiderInputTwo');
}
      calculateA71Values('Two');
      incomeYears('Two');
  }
    if (plan === 'BASIC') {
		if (hourlyA > 0 && ipCheckboxA && (spouseName2 !== '' || needNameInputC !== '')) {
			if (ageInputA >= 18 && ageInputA < 30) {
			calculatedIncomeA = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
			} else if (ageInputA >= 30 && ageInputA < 35) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
			} else if (ageInputA >= 35 && ageInputA < 40) {
            calculatedIncomeA = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
			} else if (ageInputA >= 40) {
            calculatedIncomeA = "";
			}
		} else {
			calculatedIncomeA = "";
		}
		if (hourlyB > 0 && ipCheckboxB) {
			if (ageInputB >= 18 && ageInputB < 30) {
			calculatedIncomeB = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
			} else if (ageInputB >= 30 && ageInputB < 35) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
			} else if (ageInputB >= 35 && ageInputB < 40) {
            calculatedIncomeB = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
			} else if (ageInputB >= 40) {
            calculatedIncomeB = "";
			}
		} else {
			calculatedIncomeB = "";
		}
//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
      document.getElementById("valueSelectOne").querySelector("option[value='300']").selected = true;
	} else {
        document.getElementById("valueSelectOne").querySelector("option[value='0']").selected = true;
		}
      document.getElementById('wlInputOneA').value = formatFaceAmount(calculatedHalfValueA, 'en-US', 'USD');
      document.getElementById('tenrcInputOneA').value = calculatedIncomeA;
      document.getElementById('adbInputOneA').value = formatFaceAmount(100000, 'en-US', 'USD');
	if (spouseLifeCheckbox.checked) {
      document.getElementById('wlInputOneB').value = formatFaceAmount(calculatedHalfValueB, 'en-US', 'USD');
      document.getElementById('tenrcInputOneB').value = calculatedIncomeB;
      document.getElementById('adbInputOneB').value = formatFaceAmount(100000, 'en-US', 'USD');
	}
    if (childRiderCheckbox.checked) {
		addChildRider('childRiderInputOne');
    }
      calculateA71Values('One');
      incomeYears('One');
  }

handleA71Display();
premium();
	
    var tenrcInputTwoA = Number(document.getElementById('tenrcInputTwoA').value.replace(/[^0-9]/g, ""));
	var tenrcInputTwoB = Number(document.getElementById('tenrcInputTwoB').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneA = Number(document.getElementById('tenrcInputOneA').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneB = Number(document.getElementById('tenrcInputOneB').value.replace(/[^0-9]/g, ""));
	
	if (tenrcInputTwoA <= 0 && tenrcInputTwoB <= 0 && tenrcInputOneA <= 0 && tenrcInputOneB <= 0) {
		document.getElementById('income-protection').style.display = 'none';
	} else {
		document.getElementById('income-protection').style.display = '';
	}
}


//ENABLE HOUR POWER BUTTONS WHEN $/hr IS ENTERED
function enableHourPower() {
  var hourlyA = Number(document.getElementById("optionHourlyInputA").value.replace(/[^0-9]/g, ""));
  var hourlyB = Number(document.getElementById("optionHourlyInputB").value.replace(/[^0-9]/g, ""));
  var twoHourButton = document.getElementById("twoHourButton");
  var oneHourButton = document.getElementById("oneHourButton");

  if (hourlyA > 0 || hourlyB > 0) {
    twoHourButton.disabled = false;
    oneHourButton.disabled = false;
  } else {
    twoHourButton.disabled = true;
    oneHourButton.disabled = true;
  }
}

function autoHourPower(hours) {
	document.getElementById('oneHourButton').textContent = 'ONE HOUR';
	document.getElementById('twoHourButton').textContent = 'TWO HOURS';
  var state = document.getElementById("state2").value;
	var ipCheckboxA = document.getElementById('ipCheckboxA').checked;
	var ipCheckboxB = document.getElementById('ipCheckboxB').checked;
	var a71CheckboxA = document.getElementById('a71CheckboxA').checked;
	
  // Group A Variables
  var hourlyA = Number(document.getElementById("optionHourlyInputA").value.replace(/[^0-9]/g, ""));
  var ageInputA = Number(document.getElementById("dobTextA").textContent);
  var ageInputEVA = ageInputA - 18;
  var ageInputEVSeniorA = ageInputA - 60;
  var sexInputA = document.getElementById("optionSexInputA").value;
  var tobInputA = document.getElementById("optionTobInputA").value;
  var wl30kA;
  var wlAvailablePremiumA;

  // Group B Variables
  var hourlyB = Number(document.getElementById("optionHourlyInputB").value.replace(/[^0-9]/g, ""));
  var ageInputB = Number(document.getElementById("dobTextB").textContent);
  var ageInputEVB = ageInputB - 18;
  var ageInputEVSeniorB = ageInputB - 60;
  var sexInputB = document.getElementById("optionSexInputB").value;
  var tobInputB = document.getElementById("optionTobInputB").value;
  var wl30kB;
  var wlAvailablePremiumB;
  var wlMin;
  var availablePremiumA;
  var availablePremiumB;
  var spouseLifeCheckbox = document.getElementById('spouseLifeCheckbox');
  var childRiderCheckbox = document.getElementById('childRiderCheckbox');
	
if (hourlyA > 0 || hourlyB > 0) {

    if (hours === 'Two') {
      availablePremiumA = (hourlyA * 8);
      availablePremiumB = (hourlyB * 8);
      wlMin = 30;
		
//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
      document.getElementById("valueSelect" + hours).querySelector("option[value='500']").selected = true;
      calculateA71Values('Two');
	} else {
        document.getElementById("valueSelect" + hours).querySelector("option[value='0']").selected = true;
		calculateA71Values('Two');
		}
      if (hourlyA > 0 && hourlyB > 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumA = availablePremiumA - (6.25 / 2);
          availablePremiumB = availablePremiumB - (6.25 / 2);
          document.getElementById("childRiderInputTwo").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('Two');
        }
        availablePremiumA = availablePremiumA - (mbdA71 / 2);
        availablePremiumB = availablePremiumB - (mbdA71 / 2);
			//GIVE PREMIUM TO PRIMARY IF SPOUSE LIFE IN UNCHECKED
			if (!spouseLifeCheckbox.checked) {
				availablePremiumA = availablePremiumA + availablePremiumB;
				availablePremiumB = 0;
			}
      } else if (hourlyA > 0 && hourlyB <= 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumA = availablePremiumA - 6.25;
          document.getElementById("childRiderInputTwo").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('Two');
        }
        availablePremiumA = availablePremiumA - mbdA71;
//USING SOME PREMIUM FROM THE PRIMARY FOR THE SPOUSE'S COVERAGE
		  if (spouseLifeCheckbox.checked) {
        availablePremiumB = availablePremiumA * .25;
        availablePremiumA = availablePremiumA * .75;
		  }
      } else if (hourlyA <= 0 && hourlyB > 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumB = availablePremiumB - 6.25;
          document.getElementById("childRiderInputTwo").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('Two');
        }
        availablePremiumB = availablePremiumB - mbdA71;
//USING SOME PREMIUM FROM THE SPOUSE FOR THE PRIMARY'S COVERAGE
        availablePremiumA = availablePremiumB * .25;
        availablePremiumB = availablePremiumB * .75;
			//GIVE PREMIUM TO PRIMARY IF SPOUSE LIFE IN UNCHECKED
			if (!spouseLifeCheckbox.checked) {
				availablePremiumA = availablePremiumA + availablePremiumB;
				availablePremiumB = 0;
			}
      }
		if (!childRiderCheckbox.checked) {
          document.getElementById("childRiderInputTwo").value = '';
          calculateChildRider('Two');
		}
    }
    if (hours === 'One') {
      availablePremiumA = (hourlyA * 4);
      availablePremiumB = (hourlyB * 4);
      wlMin = 15;
		
//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
      document.getElementById("valueSelect" + hours).querySelector("option[value='300']").selected = true;
      calculateA71Values('One');
	} else {
        document.getElementById("valueSelect" + hours).querySelector("option[value='0']").selected = true;
		calculateA71Values('One');
		}

      if (hourlyA > 0 && hourlyB > 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumA = availablePremiumA - (6.25 / 2);
          availablePremiumB = availablePremiumB - (6.25 / 2);
          document.getElementById("childRiderInputOne").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('One');
        }
        availablePremiumA = availablePremiumA - (mbdA71 / 2);
        availablePremiumB = availablePremiumB - (mbdA71 / 2);
			//GIVE PREMIUM TO PRIMARY IS SPOUSE LIFE IN UNCHECKED
			if (!spouseLifeCheckbox.checked) {
				availablePremiumA = availablePremiumA + availablePremiumB;
				availablePremiumB = 0;
			}
      } else if (hourlyA > 0 && hourlyB <= 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumA = availablePremiumA - 6.25;
          document.getElementById("childRiderInputOne").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('One');
        }
        availablePremiumA = availablePremiumA - mbdA71;
//USING SOME PREMIUM FROM THE PRIMARY FOR THE SPOUSE'S COVERAGE
		  if (spouseLifeCheckbox.checked) {
        availablePremiumB = availablePremiumA * .25;
        availablePremiumA = availablePremiumA * .75;
		  }
      } else if (hourlyA <= 0 && hourlyB > 0) {
        if (childRiderCheckbox.checked) {
          availablePremiumB = availablePremiumB - 6.25;
          document.getElementById("childRiderInputOne").value = formatFaceAmount((10000), 'en-US', 'USD');
          calculateChildRider('One');
        }
        availablePremiumB = availablePremiumB - mbdA71;
//USING SOME PREMIUM FROM THE SPOUSE FOR THE PRIMARY'S COVERAGE
        availablePremiumA = availablePremiumB * .25;
        availablePremiumB = availablePremiumB * .75;
			//GIVE PREMIUM TO PRIMARY IS SPOUSE LIFE IN UNCHECKED
			if (!spouseLifeCheckbox.checked) {
				availablePremiumA = availablePremiumA + availablePremiumB;
				availablePremiumB = 0;
			}
      }
		if (!childRiderCheckbox.checked) {
          document.getElementById("childRiderInputOne").value = '';
          calculateChildRider('One');
		}
    }

    //PRIMARY SENIOR
    if (ageInputA >= 60) {
      //SENIOR LEVEL
      if (state == 'MA' || state == 'MN' || state == 'NH' || state == 'NJ' || state == 'NC' || state == 'PA' || state == 'WA' || state == 'WV') {

        if (sexInputA == "male" && tobInputA == "ntu") {
          var seniorRate = srwlmntu[ageInputEVSeniorA];
        } else if (sexInputA == "male" && tobInputA == "tu") {
          var seniorRate = srwlmtu[ageInputEVSeniorA];
        } else if (sexInputA == "female" && tobInputA == "ntu") {
          var seniorRate = srwlfntu[ageInputEVSeniorA];
        } else if (sexInputA == "female" && tobInputA == "tu") {
          var seniorRate = srwlftu[ageInputEVSeniorA];
        }
      }
      //SENIOR GRADED
      else {
        if (sexInputA == "male" && tobInputA == "ntu") {
          var seniorRate = srgrmntu[ageInputEVSeniorA];
        } else if (sexInputA == "male" && tobInputA == "tu") {
          var seniorRate = srgrmtu[ageInputEVSeniorA];
        } else if (sexInputA == "female" && tobInputA == "ntu") {
          var seniorRate = srgrfntu[ageInputEVSeniorA];
        } else if (sexInputA == "female" && tobInputA == "tu") {
          var seniorRate = srgrftu[ageInputEVSeniorA];
        }
      }
      document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((availablePremiumA * 12) / seniorRate * 1000 / 1000) * 1000), 'en-US', 'USD');
      calculatePremium(hours, 'A');
    }

    //SPOUSE SENIOR
    if (ageInputB >= 60) {
      //SENIOR LEVEL
      if (state == 'MA' || state == 'MN' || state == 'NH' || state == 'NJ' || state == 'NC' || state == 'PA' || state == 'WA' || state == 'WV') {

        if (sexInputB == "male" && tobInputB == "ntu") {
          var seniorRate = srwlmntu[ageInputEVSeniorB];
        } else if (sexInputB == "male" && tobInputB == "tu") {
          var seniorRate = srwlmtu[ageInputEVSeniorB];
        } else if (sexInputB == "female" && tobInputB == "ntu") {
          var seniorRate = srwlfntu[ageInputEVSeniorB];
        } else if (sexInputB == "female" && tobInputB == "tu") {
          var seniorRate = srwlftu[ageInputEVSeniorB];
        }
      }
      //SENIOR GRADED
      else {
        if (sexInputB == "male" && tobInputB == "ntu") {
          var seniorRate = srgrmntu[ageInputEVSeniorB];
        } else if (sexInputB == "male" && tobInputB == "tu") {
          var seniorRate = srgrmtu[ageInputEVSeniorB];
        } else if (sexInputB == "female" && tobInputB == "ntu") {
          var seniorRate = srgrfntu[ageInputEVSeniorB];
        } else if (sexInputB == "female" && tobInputB == "tu") {
          var seniorRate = srgrftu[ageInputEVSeniorB];
        }
      }
      document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((availablePremiumB * 12) / seniorRate * 1000 / 1000) * 1000), 'en-US', 'USD');
      calculatePremium(hours, 'B');
    }


    //PRIMARY
    if (ageInputA >= 18 && ageInputA <= 59) {
      //SET ASIDE 30k OR 15k WL
      if (sexInputA == "male" && tobInputA == "ntu") {
        wl30kA = (rMNTU[ageInputEVA] * wlMin) / 12;
        availablePremiumA = availablePremiumA - wl30kA;
		  
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxA) {
        if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] > hourlyA * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 10000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 10) * tenrcmntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] > hourlyA * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 8000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 8) * tenrcmntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] > hourlyA * 6) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 6) * tenrcmntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] > hourlyA * 4) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 4) * tenrcmntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] > hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 2) * tenrcmntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmntu[ageInputEVA] < hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
		  }
		  

		  
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumA * 12 - 25) / slMNTU[ageInputEVA] >= 120) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12 - 25) / slMNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / exMNTU[ageInputEVA] >= 60) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / exMNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prMNTU[ageInputEVA] >= 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / prMNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prMNTU[ageInputEVA] < 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / rMNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }

      //SET ASIDE 30k OR 15k WL
      if (sexInputA == "male" && tobInputA == "tu") {
        wl30kA = (rMTU[ageInputEVA] * wlMin) / 12;
        availablePremiumA = availablePremiumA - wl30kA;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxA) {
        if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] > hourlyA * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 10000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 10) * tenrcmtu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] > hourlyA * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 8000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 8) * tenrcmtu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] > hourlyA * 6) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 6) * tenrcmtu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] > hourlyA * 4) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 4) * tenrcmtu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] > hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 2) * tenrcmtu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcmtu[ageInputEVA] < hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumA * 12 - 25) / slMTU[ageInputEVA] >= 120) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12 - 25) / slMTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / exMTU[ageInputEVA] >= 60) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / exMTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prMTU[ageInputEVA] >= 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / prMTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prMTU[ageInputEVA] < 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / rMTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      //SET ASIDE 30k OR 15k WL
      if (sexInputA == "female" && tobInputA == "ntu") {
        wl30kA = (rFNTU[ageInputEVA] * wlMin) / 12;
        availablePremiumA = availablePremiumA - wl30kA;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxA) {
        if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] > hourlyA * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 10000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 10) * tenrcfntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] > hourlyA * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 8000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 8) * tenrcfntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] > hourlyA * 6) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 6) * tenrcfntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] > hourlyA * 4) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 4) * tenrcfntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] > hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 2) * tenrcfntu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcfntu[ageInputEVA] < hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumA * 12 - 25) / slFNTU[ageInputEVA] >= 120) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12 - 25) / slFNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / exFNTU[ageInputEVA] >= 60) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / exFNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prFNTU[ageInputEVA] >= 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / prFNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prFNTU[ageInputEVA] < 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / rFNTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      //SET ASIDE 30k OR 15k WL
      if (sexInputA == "female" && tobInputA == "tu") {
        wl30kA = (rFTU[ageInputEVA] * wlMin) / 12;
        availablePremiumA = availablePremiumA - wl30kA;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxA) {
        if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] > hourlyA * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 10000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 10) * tenrcftu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] > hourlyA * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 8000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 8) * tenrcftu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] > hourlyA * 6) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 6000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 6) * tenrcftu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] > hourlyA * 4) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 4000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 4) * tenrcftu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] > hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = formatFaceAmount((hourlyA * 2000), 'en-US', 'USD');
          availablePremiumA = availablePremiumA - (((hourlyA * 2) * tenrcftu[ageInputEVA]) / 12);
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        } else if ((availablePremiumA * 12) / tenrcftu[ageInputEVA] < hourlyA * 2) {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'A').value = "";
          wlAvailablePremiumA = availablePremiumA + wl30kA;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumA * 12 - 25) / slFTU[ageInputEVA] >= 120) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12 - 25) / slFTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / exFTU[ageInputEVA] >= 60) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / exFTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prFTU[ageInputEVA] >= 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / prFTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumA * 12) / prFTU[ageInputEVA] < 35) {
          document.getElementById('wlInput' + hours + 'A').value = formatFaceAmount((Math.round((wlAvailablePremiumA * 12) / rFTU[ageInputEVA] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      calculatePremium(hours, 'A');
    }

    //SPOUSE
    if (ageInputB >= 18 && ageInputB <= 59) {
      //SET ASIDE 30k OR 15k WL
      if (sexInputB == "male" && tobInputB == "ntu") {
        wl30kB = (rMNTU[ageInputEVB] * wlMin) / 12;
        availablePremiumB = availablePremiumB - wl30kB;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxB) {
        if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] > hourlyB * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 10000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 10) * tenrcmntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] > hourlyB * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 8000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 8) * tenrcmntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] > hourlyB * 6) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 6) * tenrcmntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] > hourlyB * 4) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 4) * tenrcmntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] > hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 2) * tenrcmntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmntu[ageInputEVB] < hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumB * 12 - 25) / slMNTU[ageInputEVB] >= 120) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12 - 25) / slMNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / exMNTU[ageInputEVB] >= 60) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / exMNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prMNTU[ageInputEVB] >= 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / prMNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prMNTU[ageInputEVB] < 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / rMNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }

      //SET ASIDE 30k OR 15k WL
      if (sexInputB == "male" && tobInputB == "tu") {
        wl30kB = (rMTU[ageInputEVB] * wlMin) / 12;
        availablePremiumB = availablePremiumB - wl30kB;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxB) {
        if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] > hourlyB * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 10000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 10) * tenrcmtu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] > hourlyB * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 8000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 8) * tenrcmtu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] > hourlyB * 6) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 6) * tenrcmtu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] > hourlyB * 4) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 4) * tenrcmtu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] > hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 2) * tenrcmtu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcmtu[ageInputEVB] < hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumB * 12 - 25) / slMTU[ageInputEVB] >= 120) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12 - 25) / slMTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / exMTU[ageInputEVB] >= 60) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / exMTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prMTU[ageInputEVB] >= 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / prMTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prMTU[ageInputEVB] < 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / rMTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      //SET ASIDE 30k OR 15k WL
      if (sexInputB == "female" && tobInputB == "ntu") {
        wl30kB = (rFNTU[ageInputEVB] * wlMin) / 12;
        availablePremiumB = availablePremiumB - wl30kB;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxB) {
        if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] > hourlyB * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 10000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 10) * tenrcfntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] > hourlyB * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 8000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 8) * tenrcfntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] > hourlyB * 6) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 6) * tenrcfntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] > hourlyB * 4) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 4) * tenrcfntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] > hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 2) * tenrcfntu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcfntu[ageInputEVB] < hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumB * 12 - 25) / slFNTU[ageInputEVB] >= 120) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12 - 25) / slFNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / exFNTU[ageInputEVB] >= 60) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / exFNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prFNTU[ageInputEVB] >= 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / prFNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prFNTU[ageInputEVB] < 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / rFNTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      //SET ASIDE 30k OR 15k WL
      if (sexInputB == "female" && tobInputB == "tu") {
        wl30kB = (rFTU[ageInputEVB] * wlMin) / 12;
        availablePremiumB = availablePremiumB - wl30kB;
        //SET INCOME PROTECTION AMOUNT
		  if (ipCheckboxB) {
        if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] > hourlyB * 10 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 10000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 10) * tenrcftu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] > hourlyB * 8 && hours === 'Two') {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 8000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 8) * tenrcftu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] > hourlyB * 6) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 6000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 6) * tenrcftu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] > hourlyB * 4) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 4000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 4) * tenrcftu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] > hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = formatFaceAmount((hourlyB * 2000), 'en-US', 'USD');
          availablePremiumB = availablePremiumB - (((hourlyB * 2) * tenrcftu[ageInputEVB]) / 12);
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        } else if ((availablePremiumB * 12) / tenrcftu[ageInputEVB] < hourlyB * 2) {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
        }
		  } else {
          document.getElementById('tenrcInput' + hours + 'B').value = "";
          wlAvailablePremiumB = availablePremiumB + wl30kB;
		  }
        //CALCULATE CORRECT WL AMOUNT TO ADD BACK IN
        if ((wlAvailablePremiumB * 12 - 25) / slFTU[ageInputEVB] >= 120) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12 - 25) / slFTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / exFTU[ageInputEVB] >= 60) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / exFTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prFTU[ageInputEVB] >= 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / prFTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        } else if ((wlAvailablePremiumB * 12) / prFTU[ageInputEVB] < 35) {
          document.getElementById('wlInput' + hours + 'B').value = formatFaceAmount((Math.round((wlAvailablePremiumB * 12) / rFTU[ageInputEVB] * 1000 / 1000) * 1000), 'en-US', 'USD');
        }
      }
      calculatePremium(hours, 'B');
    }
    if (document.getElementById('wlInput' + hours + 'A').value === "$0") {
      document.getElementById('wlInput' + hours + 'A').value = "";
    }
    if (document.getElementById('tenrcInput' + hours + 'A').value === "$0") {
      document.getElementById('tenrcInput' + hours + 'A').value = "";
    }
    if (document.getElementById('wlInput' + hours + 'B').value === "$0") {
      document.getElementById('wlInput' + hours + 'B').value = "";
    }
    if (document.getElementById('tenrcInput' + hours + 'B').value === "$0") {
      document.getElementById('tenrcInput' + hours + 'B').value = "";
    }
    handleA71Display();
    calculateA71Values(hours);
    premium();
    incomeYears(hours);
  } else {
    optionClearFaceAmounts();
  }
	
    var tenrcInputTwoA = Number(document.getElementById('tenrcInputTwoA').value.replace(/[^0-9]/g, ""));
	var tenrcInputTwoB = Number(document.getElementById('tenrcInputTwoB').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneA = Number(document.getElementById('tenrcInputOneA').value.replace(/[^0-9]/g, ""));
	var tenrcInputOneB = Number(document.getElementById('tenrcInputOneB').value.replace(/[^0-9]/g, ""));
	
	if (tenrcInputTwoA <= 0 && tenrcInputTwoB <= 0 && tenrcInputOneA <= 0 && tenrcInputOneB <= 0) {
		document.getElementById('income-protection').style.display = 'none';
		
	} else {
		document.getElementById('income-protection').style.display = '';
	}
}

function incomeYears(hours) {
  var incomeYearsA = Number(document.getElementById("tenrcInput" + hours + "A").value.replace(/[^0-9]/g, ""));
  var incomeYearsB = Number(document.getElementById("tenrcInput" + hours + "B").value.replace(/[^0-9]/g, ""));
  var hourlyA = Number(document.getElementById("optionHourlyInputA").value.replace(/[^0-9]/g, ""));
  var hourlyB = Number(document.getElementById("optionHourlyInputB").value.replace(/[^0-9]/g, ""));

  if (hourlyA > 0 && incomeYearsA > 0) {

    const resultA = incomeYearsA / hourlyA / 2000;

    let formattedResultA;
    if (Number.isInteger(resultA)) {
      formattedResultA = resultA.toFixed(0);
    } else {
      formattedResultA = resultA.toFixed(2);
    }
    document.getElementById("yearsIncome" + hours + "A").textContent = formatFaceAmount(Math.round(hourlyA * 166.67)) + "/mo";
    document.getElementById("yearsIncome" + hours + "A2").textContent = "- " + formattedResultA + " yrs";
  } else {
    document.getElementById("yearsIncome" + hours + "A").textContent = "";
    document.getElementById("yearsIncome" + hours + "A2").textContent = "";
  }
  if (hourlyB > 0 && incomeYearsB > 0) {

    const resultB = incomeYearsB / hourlyB / 2000;

    let formattedResultB;
    if (Number.isInteger(resultB)) {
      formattedResultB = resultB.toFixed(0);
    } else {
      formattedResultB = resultB.toFixed(2);
    }
    document.getElementById("yearsIncome" + hours + "B").textContent = formatFaceAmount(Math.round(hourlyB * 166.67)) + "/mo";
    document.getElementById("yearsIncome" + hours + "B2").textContent = "- " + formattedResultB + " yrs";
  } else {
    document.getElementById("yearsIncome" + hours + "B").textContent = "";
    document.getElementById("yearsIncome" + hours + "B2").textContent = "";
  }
}

function premium() {
  calculatePremium('Two', 'A');
  calculatePremium('Two', 'B');
  calculatePremium('One', 'A');
  calculatePremium('One', 'B');
  calculateChildRider('Two');
  calculateChildRider('One');
  calculateA71Values('Two');
  calculateA71Values('One');
	
  var resultTwoA = parseFloat(document.getElementById("resultTwoA").textContent);
  var resultTwoB = parseFloat(document.getElementById("resultTwoB").textContent);
  var resultOneA = parseFloat(document.getElementById("resultOneA").textContent);
  var resultOneB = parseFloat(document.getElementById("resultOneB").textContent);
  var resultChildRiderTwo = parseFloat(document.getElementById("resultChildRiderTwo").textContent);
  var resultChildRiderOne = parseFloat(document.getElementById("resultChildRiderOne").textContent);
  var mbdA71Two = parseFloat(document.getElementById("premiumA71Two").textContent);
  var mbdA71One = parseFloat(document.getElementById("premiumA71One").textContent);
  var state = document.getElementById('state2').value;


  // Check for NaN and replace with 0
  if (isNaN(resultTwoA)) {
    resultTwoA = 0;
  }
  if (isNaN(resultTwoB)) {
    resultTwoB = 0;
  }
  if (isNaN(resultChildRiderTwo)) {
    resultChildRiderTwo = 0;
  }
  if (isNaN(mbdA71Two)) {
    mbdA71Two = 0;
  }
  if (isNaN(resultOneA)) {
    resultOneA = 0;
  }
  if (isNaN(resultOneB)) {
    resultOneB = 0;
  }
  if (isNaN(resultChildRiderOne)) {
    resultChildRiderOne = 0;
  }
  if (isNaN(mbdA71One)) {
    mbdA71One = 0;
  }

	
  var totalPremiumTwo = resultTwoA + resultTwoB + mbdA71Two + resultChildRiderTwo;
  var totalPremiumTwoWeekly = totalPremiumTwo / 4;
  totalPremiumTwo = Math.round(totalPremiumTwo * 100) / 100;
  document.getElementById("totalPremiumTwo").textContent = totalPremiumTwo.toFixed(2);
  document.getElementById("totalPremiumTwoWeekly").textContent = "$" + Math.round(totalPremiumTwoWeekly.toFixed(2));
	
  var totalPremiumOne = resultOneA + resultOneB + mbdA71One + resultChildRiderOne;
  var totalPremiumOneWeekly = totalPremiumOne / 4;
  totalPremiumOne = Math.round(totalPremiumOne * 100) / 100;
  document.getElementById("totalPremiumOne").textContent = totalPremiumOne.toFixed(2);
  document.getElementById("totalPremiumOneWeekly").textContent = "$" + Math.round(totalPremiumOneWeekly.toFixed(2));

}

function childCheckboxes() {
  var ageInputA = Number(document.getElementById("dobTextA").textContent);
  var optionNameInputC = document.getElementById('optionNameInputC').value;

  //UNHIDE NON SENIOR ELEMENTS
  if (ageInputA >= 18 && ageInputA <= 59 && optionNameInputC !== "") {
    document.getElementById('childA71Checkbox').disabled = false;
    document.getElementById('childRiderCheckbox').disabled = false;
    document.getElementById('childA71Checkbox').checked = true;
    document.getElementById('childRiderCheckbox').checked = true;
  }
	
  if (ageInputA >= 60) {
    document.getElementById('childA71Checkbox').disabled = true;
    document.getElementById('childRiderCheckbox').disabled = true;
    document.getElementById('childA71Checkbox').checked = false;
    document.getElementById('childRiderCheckbox').checked = false;
    handleA71Display();
    calculateA71Values('Two');
    calculateA71Values('One');
  }
}

//CALCULATE PREMIUMS
function calculatePremium(plan, pi) {
  var state = document.getElementById("state2").value;
  var ageInput = Number(document.getElementById("dobText" + pi).textContent);
  var ageInputA = Number(document.getElementById("dobTextA").textContent);
  var ageInputB = Number(document.getElementById("dobTextB").textContent);
  var sexInput = document.getElementById("optionSexInput" + pi).value;
  var tobInput = document.getElementById("optionTobInput" + pi).value;
	
//FACE AMOUNT INPUTS
  var wlInput = Number(document.getElementById("wlInput" + plan + pi).value.replace(/\D/g, ''));
  var tenrcInput = Number(document.getElementById("tenrcInput" + plan + pi).value.replace(/\D/g, ''));
  var adbInput = Number(document.getElementById("adbInput" + plan + pi).value.replace(/\D/g, ''));

  //RATES AND RESULTS
  var wlRate;
  var wlPremium;
  var tenrcRate;
  var tenrcPremium;
  var adbPremium;
	
	
if (state === "NY") {
	
	if (ageInputA > 64) {
		document.getElementById('resultChildRider' + plan);
	}
	
    if (ageInput > 76) {
        document.getElementById("wlInput" + plan + pi).value = '';
    }

    if (sexInput === "female" && ageInput > 73) {
        document.getElementById("wlInput" + plan + pi).value = '';
    }
	//Adjust the age to find the right rate in the array
	var ageAdjusterWL = ageInput;
	
	//WHOLE LIFE RATES
	if (sexInput == "male") {

//SELECT LIFE
	if (ageInput >= 18 && ageInput < 30 && wlInput >= 150000) {
		ageAdjusterWL = ageAdjusterWL - 18;
		
		//TOBACCO STATUS
		if (tobInput === "ntu") {
			wlRate = NILslMNTU[ageAdjusterWL];
		} else {
			wlRate = NILslMTU[ageAdjusterWL];
		}
		//CALCULATE PREMIUM
		wlPremium = (wlInput / 1000) * (wlRate / 12) + (25 / 12);
	} else if (ageInput >= 30 && ageInput <= 76 && wlInput >= 100000) {
		ageAdjusterWL = ageAdjusterWL - 18;
		
		//TOBACCO STATUS
		if (tobInput === "ntu") {
			wlRate = NILslMNTU[ageAdjusterWL];
		} else {
			wlRate = NILslMTU[ageAdjusterWL];
		}
		//CALCULATE PREMIUM
		wlPremium = (wlInput / 1000) * (wlRate / 12) + (25 / 12);
		
//WHOLE LIFE REGULAR
	} else if (wlInput > 0) {
		if (ageInput >= 18 && ageInput <= 70) {
      wlRate = NILrM[ageAdjusterWL];  //use WL rates  to set initial premium before checking each category based on premium
		} else if (ageInput > 70 && ageInput <= 76) {
			if (tobInput === 'ntu') {
      wlRate = NILexMNTU[ageAdjusterWL - 18];  //use EX rates to set initial premium instead of assuming WL ages 71-76
			} else {
      wlRate = NILexMTU[ageAdjusterWL - 18];  //use EX rates to set initial premium instead of assuming WL ages 71-76
			}
		}
      wlPremium = (wlInput / 1000) * (wlRate / 12);  //sets premium assuming WL before checking if the premium requires PR or EX.

		if (wlPremium < (51 / 12) && ageInput >= 18 && ageInput <= 23) {  //MINIMUM AMOUNTS ages 18-23
			wlInput = Math.floor(51000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 4.25;
		} else if (wlPremium < (104 / 12) && ageInput >= 24 && ageInput <= 70) {  //MINIMUM AMOUNTS ages 24-70
			wlInput = Math.floor(104000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 8.67;
		} else if (wlPremium < (780 / 12) && ageInput > 70 && ageInput <= 76) {
			wlInput = Math.floor(780000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 65;
		}
//PREFERRED LIFE
		
		if (wlPremium > 8.54 && ageInput >= 18 && ageInput <= 23) {  //if the premium is 8.67 then assume PR before checking if the premium requires EX
          wlRate = NILprM[ageAdjusterWL];
          wlPremium = (wlInput / 1000) * (wlRate / 12);
			if (wlPremium < 8.67) {
				wlInput = Math.floor(104000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 8.67;
			}
		} else if (wlPremium > 43.21 && ageInput >= 24 && ageInput <= 70) {  //if the premium is 43.33 then assume PR before checking if the premium requires EX
          wlRate = NILprM[ageAdjusterWL];
          wlPremium = (wlInput / 1000) * (wlRate / 12);
			if (wlPremium < 43.33) {
				wlInput = Math.floor(520000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 43.33;
			}
		}
//EXECUTIVE LIFE
        if (wlPremium > 64.86 && ((ageInput >= 18 && ageInput < 30 && wlInput < 150000) || (ageInput >= 30 && ageInput <= 76 && wlInput < 100000))) {
			ageAdjusterWL = ageAdjusterWL - 18;
			if (tobInput == "ntu") {
				wlRate = NILexMNTU[ageAdjusterWL];
				wlPremium = (wlInput / 1000) * (wlRate / 12);
				if (wlPremium < 65) {
				wlInput = Math.floor(780000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 65;
				}
			} else if (tobInput == "tu" && wlInput < 100000) {
//EX coverage limit for MTU
    if (ageInput >= 37 && ageInput <= 73) {
        const maxLimit = exLimits[ageInput];
        if (wlInput > maxLimit) {
            wlInput = maxLimit;  // If the wlInput is greater than the allowed limit, set it to the maxLimit
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
        }
	}
				wlRate = NILexMTU[ageAdjusterWL];
				wlPremium = (wlInput / 1000) * (wlRate / 12);
			}
		}
	}
	} else {

//SELECT LIFE
	if (ageInput >= 18 && ageInput < 30 && wlInput >= 150000) {
		ageAdjusterWL = ageAdjusterWL - 18;
		
		//TOBACCO STATUS
		if (tobInput === "ntu") {
			wlRate = NILslFNTU[ageAdjusterWL];
		} else {
			wlRate = NILslFTU[ageAdjusterWL];
		}
		//CALCULATE PREMIUM
		wlPremium = (wlInput / 1000) * (wlRate / 12) + (25 / 12);
	} else if (ageInput >= 30 && ageInput <= 73 && wlInput >= 100000) {
		ageAdjusterWL = ageAdjusterWL - 18;
		
		//TOBACCO STATUS
		if (tobInput === "ntu") {
			wlRate = NILslFNTU[ageAdjusterWL];
		} else {
			wlRate = NILslFTU[ageAdjusterWL];
		}
		//CALCULATE PREMIUM
		wlPremium = (wlInput / 1000) * (wlRate / 12) + (25 / 12);
		
//WHOLE LIFE REGULAR
	} else if (wlInput > 0) {
		if (ageInput >= 18 && ageInput <= 70) {
      wlRate = NILrF[ageAdjusterWL];  //use WL rates  to set initial premium before checking each category based on premium
		} else if (ageInput > 70 && ageInput <= 73) {
			if (tobInput === 'ntu') {
      wlRate = NILexFNTU[ageAdjusterWL - 18];  //use EX rates to set initial premium instead of assuming WL ages 71-73
			} else {
      wlRate = NILexFTU[ageAdjusterWL - 18];  //use EX rates to set initial premium instead of assuming WL ages 71-73
			}
		}
      wlPremium = (wlInput / 1000) * (wlRate / 12);  //sets premium assuming WL before checking if the premium requires PR or EX.

		if (wlPremium < (51 / 12) && ageInput >= 18 && ageInput <= 23) {  //MINIMUM AMOUNTS ages 18-23
			wlInput = Math.floor(51000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 4.25;
		} else if (wlPremium < (104 / 12) && ageInput >= 24 && ageInput <= 70) {  //MINIMUM AMOUNTS ages 24-70
			wlInput = Math.floor(104000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 8.67;
		} else if (wlPremium < (780 / 12) && ageInput > 70 && ageInput <= 73) {
			wlInput = Math.floor(780000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 65;
		}
//PREFERRED LIFE
		if (wlPremium > 8.54 && ageInput >= 18 && ageInput <= 23) {  //if the premium is 8.67 then assume PR before checking if the premium requires EX
          wlRate = NILprF[ageAdjusterWL];
          wlPremium = (wlInput / 1000) * (wlRate / 12);
			if (wlPremium < 8.67) {
				wlInput = Math.floor(104000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 8.67;
			}
		} else if (wlPremium > 43.21 && ageInput >= 24 && ageInput <= 70) {  //if the premium is 43.33 then assume PR before checking if the premium requires EX
          wlRate = NILprF[ageAdjusterWL];
          wlPremium = (wlInput / 1000) * (wlRate / 12);
			if (wlPremium < 43.33) {
				wlInput = Math.floor(520000 / wlRate);
			document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
			wlPremium = 43.33;
			}
		}
//EXECUTIVE LIFE
        if (wlPremium > 64.86 && ((ageInput >= 18 && ageInput < 30 && wlInput < 150000) || (ageInput >= 30 && ageInput <= 73 && wlInput < 100000))) {
			ageAdjusterWL = ageAdjusterWL - 18;
			if (tobInput == "ntu") {
				wlRate = NILexFNTU[ageAdjusterWL];
				wlPremium = (wlInput / 1000) * (wlRate / 12);
			} else if (tobInput == "tu" && wlInput < 100000) {
				wlRate = NILexFTU[ageAdjusterWL];
				wlPremium = (wlInput / 1000) * (wlRate / 12);
			}
				if (wlPremium < 65) {
                  wlInput = Math.floor(780000 / wlRate);
                  document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(wlInput);
                  wlPremium = 65;
				}
		}
	}
  }

	
    //PRIMARY RATE TERM
	var ageAdjusterTenRC = ageInput - 15;
	
    if (sexInput == "male" && ageInput <= 58) {
      tenrcRate = NILtenrcM[ageAdjusterTenRC];
    } else if (sexInput == "female" && ageInput <= 55) {
      tenrcRate = NILtenrcF[ageAdjusterTenRC];
    } else {
		document.getElementById("tenrcInput" + plan + pi).value = '';
		document.getElementById('yearsIncome' + plan + pi).textContent = '';
		document.getElementById('yearsIncome' + plan + pi + '2').textContent = '';
	}
	
    //PRIMARY RESULT TERM
    if (tenrcInput !== 0) {
      if (wlInput === 0) {
        tenrcPremium = (((tenrcInput / 1000) * tenrcRate + 25) / 12);
      } else {
        tenrcPremium = (((tenrcInput / 1000) * tenrcRate) / 12);
      }
    } else {
      tenrcPremium = 0;
    }
	
	if (tenrcInput > 0 && tenrcInput < 1000) {
		tenrcInput = 1000;
	}

    //PRIMARY RESULT ADB
	if (adbInput > 0) {
        if (ageInput < 50) {
          adbPremium = (adbInput / 12000) * NILadb[0];
        } else if (ageInput >= 50 && ageInput < 60) {
          adbPremium = (adbInput / 12000) * NILadb[1];
        } else if (ageInput >= 60 && ageInput < 65) {
          adbPremium = (adbInput / 12000) * NILadb[2];
        } else if (ageInput >= 65) {
          adbPremium = 0;
          document.getElementById("adbInput" + plan + pi).value = '';
        }
	} else {
      adbPremium = 0;
    }
	
	if (ageInput < 65) {
		document.getElementById("adbInput" + plan + pi).placeholder = 'ADB';
	} else {
		console.log(ageInput);
		document.getElementById("adbInput" + plan + pi).placeholder = 'N/A age 65+';
	}

    //ADB RESTRICTIONS
	if (ageInput > 64) {
		adbInput = '';
		document.getElementById("adbInput" + plan + pi).value = '';
	} else if (wlInput == 0 && tenrcInput == 0) {
      document.getElementById("adbInput" + plan + pi).value = '';
    } else {
		if (adbInput > 0 && adbInput < 1000) {
      document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(1000, 'en-US', 'USD');
    }
		var NILadbLimit = (wlInput + tenrcInput) * 5;
		
		if (NILadbLimit > 200000 && adbInput > 200000) {
			document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(200000, 'en-US', 'USD');
		}
		if (adbInput > NILadbLimit) {
			document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(NILadbLimit, 'en-US', 'USD');
		}
		
	}


    //PREMIUM RESULT
if (wlInput !== 0 || tenrcInput !== 0) {
  document.getElementById("result" + plan + pi).textContent = Math.ceil((wlPremium + adbPremium + tenrcPremium) * 100) / 100;
} else {
  document.getElementById("result" + plan + pi).textContent = "";
}
	
  if (ageInputA >= 65 && ageInputB >= 65) {
    var seniorElementsAB = document.getElementsByClassName("seniorHideAB");
    for (var j = 0; j < seniorElementsAB.length; j++) {
      seniorElementsAB[j].style.display = "none";
    }
  } else {
	 var seniorElementsAB = document.getElementsByClassName("seniorHideAB");
    for (var j = 0; j < seniorElementsAB.length; j++) {
      seniorElementsAB[j].style.display = "";
    } 
  }
  if (ageInput >= 65) {
    var elements = document.getElementsByClassName("seniorHide" + pi);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
  } else {
	var elements = document.getElementsByClassName("seniorHide" + pi);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "";
    } 
  }
} else {
	
	if (ageInputA > 59) {
		document.getElementById('resultChildRider' + plan);
	}
	
  //PI STATS
  var ageInputEV = ageInput - 18;
  var ageInputEVSenior = ageInput - 60;

  if (ageInput >= 18 && ageInput <= 59) {
    var seniorElements = document.getElementsByClassName("seniorHide" + pi);
    for (var i = 0; i < seniorElements.length; i++) {
      seniorElements[i].style.display = "";
    }
    var seniorElementsAB = document.getElementsByClassName("seniorHideAB");
    for (var j = 0; j < seniorElementsAB.length; j++) {
      seniorElementsAB[j].style.display = "";
    }

    //PRIMARY RATE WL
    if (sexInput == "male" && tobInput == "ntu" && wlInput > 0 && wlInput < 35000) {
      wlRate = rMNTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "ntu" && wlInput >= 35000 && wlInput < 60000) {
      wlRate = prMNTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "ntu" && wlInput >= 60000 && wlInput < 120000) {
      wlRate = exMNTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "ntu" && wlInput >= 120000) {
      wlRate = slMNTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "tu" && wlInput > 0 && wlInput < 35000) {
      wlRate = rMTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "tu" && wlInput >= 35000 && wlInput < 60000) {
      wlRate = prMTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "tu" && wlInput >= 60000 && wlInput < 120000) {
      wlRate = exMTU[ageInputEV];
    } else if (sexInput == "male" && tobInput == "tu" && wlInput >= 120000) {
      wlRate = slMTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "ntu" && wlInput > 0 && wlInput < 35000) {
      wlRate = rFNTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "ntu" && wlInput >= 35000 && wlInput < 60000) {
      wlRate = prFNTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "ntu" && wlInput >= 60000 && wlInput < 120000) {
      wlRate = exFNTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "ntu" && wlInput >= 120000) {
      wlRate = slFNTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "tu" && wlInput > 0 && wlInput < 35000) {
      wlRate = rFTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "tu" && wlInput >= 35000 && wlInput < 60000) {
      wlRate = prFTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "tu" && wlInput >= 60000 && wlInput < 120000) {
      wlRate = exFTU[ageInputEV];
    } else if (sexInput == "female" && tobInput == "tu" && wlInput >= 120000) {
      wlRate = slFTU[ageInputEV];
    }
    //PRIMARY PREMIUM WL
    if (wlInput > 0 && wlInput < 120000) {
      wlPremium = (wlInput / 1000) * (wlRate / 12);
    } else if (wlInput >= 120000) {
      wlPremium = (((wlInput / 1000) * wlRate + 25) / 12);
    } else {
      wlPremium = 0;
    }

    //PRIMARY RATE TERM
    if (sexInput == "male" && tobInput == "ntu") {
      tenrcRate = tenrcmntu[ageInputEV];
    } else if (sexInput == "male" && tobInput == "tu") {
      tenrcRate = tenrcmtu[ageInputEV];
    } else if (sexInput == "female" && tobInput == "ntu") {
      tenrcRate = tenrcfntu[ageInputEV];
    } else if (sexInput == "female" && tobInput == "tu") {
      tenrcRate = tenrcftu[ageInputEV];
    }

    //PRIMARY RESULT TERM
    if (tenrcInput !== 0) {
      if (wlInput === 0) {
        tenrcPremium = (((tenrcInput / 1000) * tenrcRate + 25) / 12);
      } else {
        tenrcPremium = (((tenrcInput / 1000) * tenrcRate) / 12);
      }
    } else {
      tenrcPremium = 0;
    }

    //PRIMARY RESULT ADB
    if (adbInput > 0 && ageInput < 50) {
      adbPremium = (adbInput / 12000) * adb[0];
    } else if (adbInput > 0 && ageInput >= 50) {
      adbPremium = (adbInput / 12000) * adb[1];
    } else {
      adbPremium = 0;
    }

    //ADB RESTRICTIONS
    if (wlInput == 0 && tenrcInput == 0) {
      adbInput = '';
      document.getElementById("adbInput" + plan + pi).value = '';
    } else if (adbInput > 0 && adbInput < 1000) {
      adbInput = 1000;
      document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
    }

    if (wlInput == 0 && tenrcInput >= 1000) {
      if (tenrcInput >= 1000 && tenrcInput <= 200000 && adbInput > 200000) {
        adbInput = 200000;
        document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
      } else if (tenrcInput > 200000 && tenrcInput <= 300000 && adbInput > tenrcInput) {
        adbInput = tenrcInput;
        document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
      } else if (tenrcInput > 300000 && adbInput > 300000) {
        adbInput = 300000;
        document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
      }
    }

    if (wlInput >= 1000 && wlInput <= 200000 && adbInput > 200000) {
      adbInput = 200000;
      document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
    } else if (wlInput > 200000 && wlInput <= 300000 && adbInput > wlInput) {
      adbInput = wlInput;
      document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
    } else if (wlInput > 300000 && adbInput > 300000) {
      adbInput = 300000;
      document.getElementById("adbInput" + plan + pi).value = formatFaceAmount(adbInput, 'en-US', 'USD');
    }

	  
    //PREMIUM RESULT
    if (wlInput !== 0 || tenrcInput !== 0) {
      document.getElementById("result" + plan + pi).textContent = Math.ceil((wlPremium + adbPremium + tenrcPremium) * 100) / 100;
    } else {
      document.getElementById("result" + plan + pi).textContent = "";
    }
  }

  //RATES AGE 60-80
  //HIDE NON SENIOR ELEMENTS
  if (ageInputA >= 60 && ageInputB >= 60) {
    var seniorElementsAB = document.getElementsByClassName("seniorHideAB");
    for (var j = 0; j < seniorElementsAB.length; j++) {
      seniorElementsAB[j].style.display = "none";
    }
	  
  }
  if (ageInput >= 60) {
    document.getElementById("yearsIncomeTwo" + pi).textContent = "";
    document.getElementById("yearsIncomeOne" + pi).textContent = "";
    document.getElementById("yearsIncomeTwo" + pi + "2").textContent = "";
    document.getElementById("yearsIncomeOne" + pi + "2").textContent = "";

    var elements = document.getElementsByClassName("seniorHide" + pi);
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    document.getElementById("result" + plan + pi).textContent = "";
    document.getElementById("adbInput" + plan + pi).value = "";
    document.getElementById("tenrcInput" + plan + pi).value = "";


    if (wlInput >= 35000) {
      wlInput = 34999;
      document.getElementById("wlInput" + plan + pi).value = formatFaceAmount(34999);
    }

    //SENIOR LEVEL WL
    if (state == 'MA' || state == 'MN' || state == 'NH' || state == 'NJ' || state == 'NC' || state == 'PA' || state == 'WA' || state == 'WV') {

      //PRIMARY RATE SENIOR LEVEL WL
      if (sexInput == "male" && tobInput == "ntu") {
        wlRate = srwlmntu[ageInputEVSenior];
      } else if (sexInput == "male" && tobInput == "tu") {
        wlRate = srwlmtu[ageInputEVSenior];
      } else if (sexInput == "female" && tobInput == "ntu") {
        wlRate = srwlfntu[ageInputEVSenior];
      } else if (sexInput == "female" && tobInput == "tu") {
        wlRate = srwlftu[ageInputEVSenior];
      }

      //PRIMARY RESULT SENIOR LEVEL WL
      if (wlInput > 0) {
        wlPremium = (((wlInput / 1000) * wlRate) / 12);
      } else {
        wlPremium = 0;
      }

    }
    //SENIOR GRADED WL
    else {
      //PRIMARY RATE SENIOR GRADED WL
      if (sexInput == "male" && tobInput == "ntu") {
        wlRate = srgrmntu[ageInputEVSenior];
      } else if (sexInput == "male" && tobInput == "tu") {
        wlRate = srgrmtu[ageInputEVSenior];
      } else if (sexInput == "female" && tobInput == "ntu") {
        wlRate = srgrfntu[ageInputEVSenior];
      } else if (sexInput == "female" && tobInput == "tu") {
        wlRate = srgrftu[ageInputEVSenior];
      }

      //PRIMARY RESULT SENIOR GRADED WL
      if (wlInput > 0) {
        wlPremium = (((wlInput / 1000) * wlRate) / 12);
      } else {
        wlPremium = 0;
      }
    }
  }

  //PREMIUM RESULTS SENIOR
  if (ageInput >= 76 && tobInput === "tu") {
    document.getElementById("wlInput" + plan + pi).value = "";
    document.getElementById("result" + plan + pi).textContent = "TU ends @75";
  } else if (ageInput >= 60) {
    if (wlInput !== 0) {
      document.getElementById("result" + plan + pi).textContent = Math.ceil((wlPremium) * 100) / 100;
    }
  }
}
}

function calculateA71Values(hours) {
	
//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
		
  var state = document.getElementById("state2").value;
  var dailyAmount = Number(document.getElementById("valueSelect" + hours).value.replace(/[^\d.]/g, ''));
  const formatCurrency = value => "$" + value.toLocaleString();
  var age = Number(document.getElementById("dobTextA").textContent);
  var ageB = Number(document.getElementById("dobTextB").textContent);
  var premiumA71;
  var indA71, famA71, twoA71, twoFamA71;
  var serviceCharge = 0.25; // Initialize the service charge
  var spouseA71Checkbox = document.getElementById('spouseA71Checkbox');
  var childA71Checkbox = document.getElementById('childA71Checkbox');
  var adbInputA = Number(document.getElementById('adbInput' + hours + 'A').value.replace(/[^\d.]/g, ''));
  var adbInputB = Number(document.getElementById('adbInput' + hours + 'B').value.replace(/[^\d.]/g, ''));
		
		
		if (state === 'NY') {
          if (age > 64) {
			adbInputA = 0;
            childA71Checkbox.checked = false;
            
		}
          if (ageB > 64) {
			adbInputB = 0;
		}
		} else {
			if (age >= 60) {
				adbInputA = 0;
				childA71Checkbox.checked = false;
		}
			if (ageB >= 60) {
				adbInputB = 0;
		}
		}

  if (dailyAmount === 0) {
    mbdA71 = 0;
    const elements = ["er" + hours, "hos" + hours, "ic" + hours, "adb" + hours, "auto" + hours, "cc" + hours, "er" + hours + "_spouse", "hos" + hours + "_spouse", "ic" + hours + "_spouse", "adb" + hours + "_spouse", "auto" + hours + "_spouse", "cc" + hours + "_spouse", "er" + hours + "_child", "hos" + hours + "_child", "ic" + hours + "_child", "adb" + hours + "_child", "auto" + hours + "_child", "cc" + hours + "_child"];

    for (const elementId of elements) {
      document.getElementById(elementId).textContent = "";
    }
    document.getElementById("premiumA71" + hours).textContent = 0; // Set premiumA71 to empty if dailyAmount is 0
  } else {
    document.getElementsByClassName("perday").textContent = "/day";
    const multipliers = [0.5, 1, 2, 100, 200, 500];
    const labels = ["er" + hours, "hos" + hours, "ic" + hours, "adb" + hours, "auto" + hours, "cc" + hours];

    for (const i in multipliers) {
      const value = dailyAmount * multipliers[i];
      if (labels[i] === "adb" + hours || labels[i] === "auto" + hours || labels[i] === "cc" + hours) {
        document.getElementById(labels[i]).textContent = formatCurrency(value + adbInputA);
        document.getElementById(labels[i] + "_spouse").textContent = formatCurrency(value + adbInputB);
      } else {
        document.getElementById(labels[i]).textContent = formatCurrency(value);
        document.getElementById(labels[i] + "_spouse").textContent = formatCurrency(value);
      }
      if (i < 6) {
        document.getElementById(labels[i] + "_child").textContent = formatCurrency(value);
      }
    }

    // New multipliers for adb_child, auto_child, cc_child
    const childMultipliers = [20, 40, 100]; // 1/5 of the current values
    const childLabels = ["adb" + hours + "_child", "auto" + hours + "_child", "cc" + hours + "_child"];

    for (const i in childMultipliers) {
      const value = dailyAmount * childMultipliers[i];
      document.getElementById(childLabels[i]).textContent = formatCurrency(value);
    }

    // Add this block to hide spouse-related elements if spouse checkbox is unchecked
    if (!spouseA71Checkbox.checked) {
      const spouseElements = ["er" + hours + "_spouse", "hos" + hours + "_spouse", "ic" + hours + "_spouse", "adb" + hours + "_spouse", "auto" + hours + "_spouse", "cc" + hours + "_spouse"];
      for (const elementId of spouseElements) {
        document.getElementById(elementId).style.display = "none";
      }
    } else {
      const spouseElements = ["er" + hours + "_spouse", "hos" + hours + "_spouse", "ic" + hours + "_spouse", "adb" + hours + "_spouse", "auto" + hours + "_spouse", "cc" + hours + "_spouse"];
      for (const elementId of spouseElements) {
        document.getElementById(elementId).style.display = "block";
      }
    }

    // Add this block to hide child-related elements if child checkbox is unchecked
    if (!childA71Checkbox.checked) {
      const childElements = ["er" + hours + "_child", "hos" + hours + "_child", "ic" + hours + "_child", "adb" + hours + "_child", "auto" + hours + "_child", "cc" + hours + "_child"];
      for (const elementId of childElements) {
        document.getElementById(elementId).style.display = "none";
      }
    } else {
      const childElements = ["er" + hours + "_child", "hos" + hours + "_child", "ic" + hours + "_child", "adb" + hours + "_child", "auto" + hours + "_child", "cc" + hours + "_child"];
      for (const elementId of childElements) {
        document.getElementById(elementId).style.display = "block";
      }
    }

    if (state === "FL" || state === "VA") {
      if (age >= 18 && age <= 49) {
        indA71 = 15.95;
        famA71 = 33.77;
      } else if (age >= 50 && age <= 59) {
        indA71 = 17.82;
        famA71 = 37.52;
      } else if (age >= 60 && age <= 64) {
        indA71 = 22.51;
        famA71 = 45.03;
      } else if (age >= 65 && age <= 74) {
        indA71 = 45.03;
        famA71 = 90.06;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "PA") {
      if (age >= 18 && age <= 49) {
        indA71 = 25.5;
        famA71 = 31;
        twoA71 = 48.5;
        twoFamA71 = 54;
      } else if (age >= 50 && age <= 59) {
        indA71 = 28.5;
        famA71 = 34;
        twoA71 = 54.5;
        twoFamA71 = 60;
      } else if (age >= 60 && age <= 64) {
        indA71 = 36;
        famA71 = 38.5;
        twoA71 = 69.5;
        twoFamA71 = 72;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        twoA71 = "";
        twoFamA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked && !childA71Checkbox.checked) {
        premiumA71 = twoA71;
      } else if (!spouseA71Checkbox.checked && childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else if (spouseA71Checkbox.checked && childA71Checkbox.checked) {
        premiumA71 = twoFamA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "CT" || state === "MA") {
      if (age >= 18 && age <= 49) {
        indA71 = 25.5;
        famA71 = 54;
      } else if (age >= 50 && age <= 59) {
        indA71 = 28.5;
        famA71 = 60;
      } else if (age >= 60 && age <= 64) {
        indA71 = 36;
        famA71 = 72;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "VT") {
      if (age >= 18 && age <= 49) {
        indA71 = 25.5;
        famA71 = 57.5;
      } else if (age >= 50 && age <= 59) {
        indA71 = 28.5;
        famA71 = 63.5;
      } else if (age >= 60 && age <= 64) {
        indA71 = 36;
        famA71 = 75.5;
      } else if (age >= 65 && age <= 74) {
        indA71 = 72;
        famA71 = 144;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "NJ") {
      if (age >= 18 && age <= 49) {
        indA71 = 17.5;
        famA71 = 37.1;
      } else if (age >= 50 && age <= 59) {
        indA71 = 19.6;
        famA71 = 41.3;
      } else if (age >= 60 && age <= 64) {
        indA71 = 24.8;
        famA71 = 49.5;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "CA") {
      if (age >= 18 && age <= 49) {
        indA71 = 25;
        famA71 = 53;
      } else if (age >= 50 && age <= 59) {
        indA71 = 28;
        famA71 = 59;
      } else if (age >= 60 && age <= 64) {
        indA71 = 35.5;
        famA71 = 71;
      } else if (age >= 65 && age <= 74) {
        indA71 = 71;
        famA71 = 142;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else if (state === "NY") {
      if (age >= 18 && age <= 49) {
        indA71 = 18.62;
        famA71 = 39.42;
      } else if (age >= 50 && age <= 59) {
        indA71 = 20.81;
        famA71 = 43.8;
      } else if (age >= 60 && age <= 64) {
        indA71 = 26.28;
        famA71 = 52.56;
      } else if (age >= 65 && age <= 69) {
        indA71 = 28.2;
        famA71 = 57;
      } else if (age >= 70 && age <= 74) {
        indA71 = 37.8;
        famA71 = 75;
      } else if (age >= 75 && age <= 79) {
        indA71 = 51;
        famA71 = 99;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    } else {
      if (age >= 18 && age <= 49) {
        indA71 = 25.5;
        famA71 = 54;
      } else if (age >= 50 && age <= 59) {
        indA71 = 28.5;
        famA71 = 60;
      } else if (age >= 60 && age <= 64) {
        indA71 = 36;
        famA71 = 72;
      } else if (age >= 65 && age <= 90) {
        indA71 = 72;
        famA71 = 144;
      } else {
        document.getElementById("valueSelect" + hours).value = 0;
        indA71 = "";
        famA71 = "";
        serviceCharge = "";
      }
      if (spouseA71Checkbox.checked || childA71Checkbox.checked) {
        premiumA71 = famA71;
      } else {
        premiumA71 = indA71;
      }
      mbdA71 = Math.round(((premiumA71 * (dailyAmount / 100)) / 12 + serviceCharge) * 100) / 100;
      document.getElementById("premiumA71" + hours).textContent = mbdA71 + 5;
    }
  }
  handleA71Display();
}
}

//INCOME MINIMUM INPUT
function minInput(inputElement, minimum) {
  var state = document.getElementById("state2").value;
  var optionIncomeInput = parseFloat(inputElement.value.replace(/[^\d.]/g, ''));

  if (optionIncomeInput < minimum) {
    optionIncomeInput = minimum;
    inputElement.value = optionIncomeInput;
    optionFormatCurrency(inputElement);
  }
premium();
}

function famStatus() {
  var spouseName = document.getElementById('spouseName3').value;
  var childNameElement = document.getElementById('optionNameInputC');
  var childName = childNameElement ? childNameElement.value : null;
  var hourlyB = document.getElementById("optionHourlyInputB");
  var a71CheckboxA = document.getElementById('a71CheckboxA').checked;
  var a71CheckboxB = document.getElementById('a71CheckboxB').checked;
  var spouseA71Checkbox = document.getElementById('spouseA71Checkbox');
  var childA71Checkbox = document.getElementById('childA71Checkbox');
  var spouseLifeCheckbox = document.getElementById('spouseLifeCheckbox');
  var childRiderCheckbox = document.getElementById('childRiderCheckbox');

  if (spouseName !== "") {
	  if (a71CheckboxB) {
    spouseA71Checkbox.checked = true;
    spouseA71Checkbox.disabled = false;
	  } else {
    spouseA71Checkbox.checked = false;
	  }
    spouseLifeCheckbox.checked = true;
    spouseLifeCheckbox.disabled = false;
    hourlyB.disabled = false;
  } else {
    spouseA71Checkbox.checked = false;
    spouseA71Checkbox.disabled = true;
    spouseLifeCheckbox.checked = false;
    spouseLifeCheckbox.disabled = true;
    hourlyB.disabled = true;
  }

  if (childName !== null) {
    if (childName !== "") {
      childA71Checkbox.checked = true;
      childA71Checkbox.disabled = false;
      childRiderCheckbox.checked = true;
      childRiderCheckbox.disabled = false;
    } else {
      childA71Checkbox.checked = false;
      childA71Checkbox.disabled = true;
      childRiderCheckbox.checked = false;
      childRiderCheckbox.disabled = true;
    }
  }
  childVisibility();
  premium();
}

function optionClearFaceAmounts() {
  document.getElementById("wlInputTwoA").value = '';
  document.getElementById("wlInputTwoB").value = '';
  document.getElementById("childRiderInputTwo").value = '';
  document.getElementById("tenrcInputTwoA").value = '';
  document.getElementById("tenrcInputTwoB").value = '';
  document.getElementById("adbInputTwoA").value = '';
  document.getElementById("adbInputTwoB").value = '';
  document.getElementById("valueSelectTwo").value = 0;
  document.getElementById("wlInputOneA").value = '';
  document.getElementById("wlInputOneB").value = '';
  document.getElementById("childRiderInputOne").value = '';
  document.getElementById("tenrcInputOneA").value = '';
  document.getElementById("tenrcInputOneB").value = '';
  document.getElementById("adbInputOneA").value = '';
  document.getElementById("adbInputOneB").value = '';
  document.getElementById("valueSelectOne").value = 0;
  document.getElementById("hourTitle").style.display = "none";
  document.getElementById('twoHourButton').style.backgroundColor = '';
  document.getElementById('twoHourButton').style.border = '';
  document.getElementById('oneHourButton').style.backgroundColor = '';
  document.getElementById('oneHourButton').style.border = '';
  document.querySelector('.option-bigboy-container').style.boxShadow = '';

  handleA71Display();
  premium();
  incomeYears('Two');
  incomeYears('One');
}

// Function to handle the display based on selected value
function handleA71Display() {

  const selectedValueTwo = document.getElementById("valueSelectTwo").value;
  const selectedValueOne = document.getElementById("valueSelectOne").value;
  const a71DisplayElements = document.querySelectorAll(".a71Display");

  a71DisplayElements.forEach(element => {
    if (selectedValueTwo === "0" && selectedValueOne === "0") {
      element.style.display = "none";
    } else if (isLicensed && a71CheckboxA) {
      element.style.display = "block";
    }
  });
}

function updateValueOption(hours) {
	//Only use if agent is licensed in A&H	
	if (isLicensed && a71CheckboxA) {
  var stateSelect = document.getElementById("state2");
  var valueSelect = document.getElementById("valueSelect" + hours);
  var selectedState = stateSelect.value;
  var option600 = valueSelect.querySelector("option[value='600']");
  var option500 = valueSelect.querySelector("option[value='500']");

  if (selectedState === "NJ" || selectedState === "FL" || selectedState === "VA") {
    option600.style.display = "block";
  } else {
    option600.style.display = "none";
    if (valueSelect.value === "600") {
      valueSelect.value = "500";
      option500.selected = true;
    }
  }
}
}

function togglePremiumDisplay() {
  var element = document.getElementById("premiumDisplay");
  var showTextElement = document.getElementById("showText");
  var computedStyle = window.getComputedStyle(element);

  if (computedStyle.display === "none" || computedStyle.display === "") {
    element.style.display = "inline";
    showTextElement.style.display = "none";
  } else {
    element.style.display = "none";
    showTextElement.style.display = "inline";
  }
}

function minHourly(input) {
  var inputElement = document.getElementById(input);
  var currentValue = Number(inputElement.value.replace(/\D/g, ''));

  if (currentValue < 10 && currentValue !== 0) {
    var newValue = 10;
  } else {
    var newValue = currentValue;
  }

  inputElement.value = formatFaceAmount(newValue, 'en-US', 'USD');
}


function reduce(input) {
  var inputElement = document.getElementById(input);
  var currentValue = Number(inputElement.value.replace(/\D/g, ''));
  var newValue = currentValue * 0.75;
  newValue = Math.round(newValue / 5000) * 5000;

  if (newValue <= 10000) {
    newValue = newValue * .5;
  } else if (newValue >= 30000 && newValue < 35000) {
    newValue = 35000;
  } else if (newValue >= 50000 && newValue < 60000) {
    newValue = 60000;
  } else if (newValue >= 100000 && newValue < 120000) {
    newValue = 120000;
  }

  if (newValue <= 0) {
    inputElement.value = "";
  } else {
    inputElement.value = formatFaceAmount(newValue, 'en-US', 'USD');
  }

  premium();
  
}

function increase(input) {
  var inputElement = document.getElementById(input);
  var currentValue = Number(inputElement.value.replace(/\D/g, ''));
  var newValue;
  var state = document.getElementById('state2').value;

  if (currentValue < 15000) {
    newValue = currentValue + 5000;
  } else {
    newValue = currentValue / (0.75);
  }

  newValue = Math.floor(newValue / 5000) * 5000;
	
if (state !== 'NY') {
	
  if (newValue >= 30000 && newValue < 35000) {
    newValue = 35000;
  } else if (newValue >= 50000 && newValue < 60000) {
    newValue = 60000;
  } else if (newValue >= 100000 && newValue < 120000) {
    newValue = 120000;
  }
}
	  
if (newValue >= 9999999) {
    newValue = 9999999;
  }

  inputElement.value = formatFaceAmount(newValue, 'en-US', 'USD');

  premium();
  
}

function reduceIncome(input, pi) {
  var inputElement = document.getElementById(input);
  var currentValue = Number(inputElement.value.replace(/\D/g, ''));
  var hourly = Number(document.getElementById("optionHourlyInput" + pi).value.replace(/\D/g, ''));
  var newValue;

  if (hourly > 0) {
    newValue = currentValue - (hourly * 2000);
  } else {
    newValue = currentValue * 0.75;
    newValue = Math.round(newValue / 5000) * 5000;


    if (newValue <= 10000) {
      newValue = newValue * .5;
    } else if (newValue >= 30000 && newValue < 35000) {
      newValue = 35000;
    } else if (newValue >= 50000 && newValue < 60000) {
      newValue = 60000;
    } else if (newValue >= 100000 && newValue < 120000) {
      newValue = 120000;
    }
  }
  if (newValue <= 0) {
    inputElement.value = "";
  } else {
    inputElement.value = formatFaceAmount(newValue, 'en-US', 'USD');
  }


  premium();
  incomeYears('Two');
  incomeYears('One');
  
}

function increaseIncome(input, pi) {
  var inputElement = document.getElementById(input);
  var currentValue = Number(inputElement.value.replace(/\D/g, ''));
  var hourly = Number(document.getElementById("optionHourlyInput" + pi).value.replace(/\D/g, ''));
  var newValue;

  if (hourly > 0) {
    newValue = currentValue + (hourly * 2000);
  } else {

    if (currentValue < 15000) {
      newValue = currentValue + 5000;
    } else {
      newValue = currentValue / (0.75);
    }

    newValue = Math.floor(newValue / 5000) * 5000;
  }


  if (newValue >= 9999999) {
    newValue = 9999999;
  }

  inputElement.value = formatFaceAmount(newValue, 'en-US', 'USD');


  premium();
  incomeYears('Two');
  incomeYears('One');
  
}

function match(input, source) {
  var inputElement = document.getElementById(input);
  var sourceElement = document.getElementById(source);

  inputElement.value = sourceElement.value;


  premium();
}

function remove(input) {
  var inputElement = document.getElementById(input);

  inputElement.value = "";


  premium();
  incomeYears('Two');
  incomeYears('One');
}

function addChildRider(input) {
  var state = document.getElementById("state2").value;
  var inputElement = document.getElementById(input);

          inputElement.value = formatFaceAmount(10000, 'en-US', 'USD');
		  document.getElementById('childRiderInputTwo').style.visibility = 'visible';
          document.getElementById('childRiderInputOne').style.visibility = 'visible';

  premium();

}

function calculateChildRider(hours) {
  var childRiderPremium;
  var state = document.getElementById('state2').value;

  var ageInputA = Number(document.getElementById("dobTextA").textContent);
  var ageInputB = Number(document.getElementById("dobTextB").textContent);
  var needNameInputC = document.getElementById('needNameInputC').value;
	
  if (needNameInputC !== ''){
	
	if (state === 'NY' && ageInputA > 64) {
		document.getElementById('childRiderInput' + hours).style.visibility = 'hidden';
        document.getElementById('childRiderInput' + hours).value = '';
		document.getElementById('resultChildRider' + hours).textContent = '';
	} else if (state !== 'NY' && ageInputA >= 60) {
        document.getElementById('childRiderInput' + hours).style.visibility = 'hidden';
        document.getElementById('childRiderInput' + hours).value = '';
		document.getElementById('resultChildRider' + hours).textContent = '';
      } else {
		  document.getElementById('childRiderInput' + hours).style.visibility = 'visible';
		  }
  } else {
      document.getElementById('childRiderInput' + hours).style.visibility = 'hidden';
      document.getElementById('childRiderInput' + hours).value = '';
      document.getElementById('resultChildRider' + hours).textContent = '';
	}
	
  var childRiderInput = Number(document.getElementById("childRiderInput" + hours).value.replace(/\D/g, ''));

  if (childRiderInput > 10000) {
    childRiderInput = 10000;
    document.getElementById("childRiderInput" + hours).value = formatFaceAmount((childRiderInput), 'en-US', 'USD');
  }

  if (childRiderInput > 0) {
    childRiderPremium = ((childRiderInput / 1000) * childRiderRate) / 12;
    document.getElementById("resultChildRider" + hours).textContent = childRiderPremium;
  } else {
    childRiderPremium = 0;
    document.getElementById("resultChildRider" + hours).textContent = "";
  }
}

function enableChildButtons() {
  var inputValue = document.getElementById("childA71Checkbox");
  var addChildRiderButton = document.getElementById("addChildRiderButton");
  var removeChildRiderButton = document.getElementById("removeChildRiderButton");

  if (inputValue.checked) {
    removeChildRiderButton.disabled = false;
    addChildRiderButton.disabled = false;
  } else {
    removeChildRiderButton.disabled = true;
    addChildRiderButton.disabled = true;
  }
}

function childVisibility() {
  var needNameInputC = document.getElementById('needNameInputC').value;
	
		if (needNameInputC === '') {
		document.getElementById("childRiderInputTwo").value = '';
		document.getElementById("childRiderInputOne").value = '';
        hideElementsByClass('childRiderElement');
	} else {
		showElementsByClass('childRiderElement');
	}
}

        // Get all input and select elements on the page
        const runPremiumElements = document.querySelectorAll('input, select');

        // Add the onblur event listener to all input and select runPremiumElements
        runPremiumElements.forEach(function(element) {
            element.addEventListener('change', function() {
                premium();
            });
        });

// Trigger the function initially to reflect the initial state
handleA71Display();

// Add event listener to update values whenever the select box value changes

document.getElementById("optionSexInputA").addEventListener("input", premium);
document.getElementById("optionTobInputA").addEventListener("input", premium);
document.getElementById("optionSexInputB").addEventListener("input", premium);
document.getElementById("optionTobInputB").addEventListener("input", premium);
document.getElementById("valueSelectTwo").addEventListener("change", function () {
  handleA71Display();
  premium();
});
document.getElementById("valueSelectOne").addEventListener("change", function () {
  handleA71Display();
  premium();
});

document.getElementById("state2").addEventListener("change", function () {
  updateValueOption('Two');
  updateValueOption('One');
  handleA71Display();
  premium();
});

document.addEventListener("DOMContentLoaded", function () {
  updateValueOption('Two');
  updateValueOption('One');
});

document.getElementById("optionHourlyInputA").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("optionHourlyInputB").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("tenrcInputTwoA").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("tenrcInputTwoB").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("tenrcInputOneA").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("tenrcInputOneB").addEventListener("input", function () {
  incomeYears('Two');
  incomeYears('One');
});
document.getElementById("spouseA71Checkbox").addEventListener("change", function () {
  premium();
});
document.getElementById("childA71Checkbox").addEventListener("change", function () {
  premium();
});
document.getElementById("spouseName3").addEventListener("input", famStatus);