//Abaixo temos as variáveis utilizadas no código sendo declaradas
var raio = 0.13, cos = 0, sen = 0, aceleracao = 2.64, velocidadeMaxima = 2.3;
var vetorTempo = [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36, 0.38, 0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52, 0.54, 0.56, 0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.74, 0.76, 0.78, 0.8, 0.82, 0.84, 0.86, 0.88, 0.9, 0.92, 0.94, 0.96, 0.98, 1, 1.02, 1.04, 1.06, 1.08, 1.1, 1.12, 1.14, 1.16, 1.18, 1.2, 1.22, 1.24, 1.26, 1.28, 1.3, 1.32, 1.34, 1.36, 1.38, 1.4, 1.42, 1.44, 1.46, 1.48, 1.5, 1.52, 1.54, 1.56, 1.58, 1.6, 1.62, 1.64, 1.66, 1.68, 1.7, 1.72, 1.74, 1.76, 1.78, 1.8, 1.82, 1.84, 1.86, 1.88, 1.9, 1.92, 1.94, 1.96, 1.98, 2, 2.02, 2.04, 2.06, 2.08, 2.1, 2.12, 2.14, 2.16, 2.18, 2.2, 2.22, 2.24, 2.26, 2.28, 2.3, 2.32, 2.34, 2.36, 2.38, 2.4, 2.42, 2.44, 2.46, 2.48, 2.5, 2.52, 2.54, 2.56, 2.58, 2.6, 2.62, 2.64, 2.66, 2.68, 2.7, 2.72, 2.74, 2.76, 2.78, 2.8, 2.82, 2.84, 2.86, 2.88, 2.9, 2.92, 2.94, 2.96, 2.98, 3, 3.02, 3.04, 3.06, 3.08, 3.1, 3.12, 3.14, 3.16, 3.18, 3.2, 3.22, 3.24, 3.26, 3.28, 3.3, 3.32, 3.34, 3.36, 3.38, 3.4, 3.42, 3.44, 3.46, 3.48, 3.5, 3.52, 3.54, 3.56, 3.58, 3.6, 3.62, 3.64, 3.66, 3.68, 3.7, 3.72, 3.74, 3.76, 3.78, 3.8, 3.82, 3.84, 3.86, 3.88, 3.9, 3.92, 3.94, 3.96, 3.98, 4, 4.02, 4.04, 4.06, 4.08, 4.1, 4.12, 4.14, 4.16, 4.18, 4.2, 4.22, 4.24, 4.26, 4.28, 4.3, 4.32, 4.34, 4.36, 4.38, 4.4, 4.42, 4.44, 4.46, 4.48, 4.5, 4.52, 4.54, 4.56, 4.58, 4.6, 4.62, 4.64, 4.66, 4.68, 4.7, 4.72, 4.74, 4.76, 4.78, 4.8, 4.82, 4.84, 4.86, 4.88, 4.9, 4.92, 4.94, 4.96, 4.98, 5, 5.02, 5.04, 5.06, 5.08, 5.1, 5.12, 5.14, 5.16, 5.18, 5.2, 5.22, 5.24, 5.26, 5.28, 5.3, 5.32, 5.34, 5.36, 5.38, 5.4, 5.42, 5.44, 5.46, 5.48, 5.5, 5.52, 5.54, 5.56, 5.58, 5.6, 5.62, 5.64, 5.66, 5.68, 5.7, 5.72, 5.74, 5.76, 5.78, 5.8, 5.82, 5.84, 5.86, 5.88, 5.9, 5.92, 5.94, 5.96, 5.98, 6, 6.02, 6.04, 6.06, 6.08, 6.1, 6.12, 6.14, 6.16, 6.18, 6.2, 6.22, 6.24, 6.26, 6.28, 6.3, 6.32, 6.34, 6.36, 6.38, 6.4, 6.42, 6.44, 6.46, 6.48, 6.5, 6.52, 6.54, 6.56, 6.58, 6.6, 6.62, 6.64, 6.66, 6.68, 6.7, 6.72, 6.74, 6.76, 6.78, 6.8, 6.82, 6.84, 6.86, 6.88, 6.9, 6.92, 6.94, 6.96, 6.98, 7, 7.02, 7.04, 7.06, 7.08, 7.1, 7.12, 7.14, 7.16, 7.18, 7.2, 7.22, 7.24, 7.26, 7.28, 7.3, 7.32, 7.34, 7.36, 7.38, 7.4, 7.42, 7.44, 7.46, 7.48, 7.5, 7.52, 7.54, 7.56, 7.58, 7.6, 7.62, 7.64, 7.66, 7.68, 7.7, 7.72, 7.74, 7.76, 7.78, 7.8, 7.82, 7.84, 7.86, 7.88, 7.9, 7.92, 7.94, 7.96, 7.98, 8, 8.02, 8.04, 8.06, 8.08, 8.1, 8.12, 8.14, 8.16, 8.18, 8.2, 8.22, 8.24, 8.26, 8.28, 8.3, 8.32, 8.34, 8.36, 8.38, 8.4, 8.42, 8.44, 8.46, 8.48, 8.5, 8.52, 8.54, 8.56, 8.58, 8.6, 8.62, 8.64, 8.66, 8.68, 8.7, 8.72, 8.74, 8.76, 8.78, 8.8, 8.82, 8.84, 8.86, 8.88, 8.9, 8.92, 8.94, 8.96, 8.98, 9, 9.02, 9.04, 9.06, 9.08, 9.1, 9.12, 9.14, 9.16, 9.18, 9.2, 9.22, 9.24, 9.26, 9.28, 9.3, 9.32, 9.34, 9.36, 9.38, 9.4, 9.42, 9.44, 9.46, 9.48, 9.5, 9.52, 9.54, 9.56, 9.58, 9.6, 9.62, 9.64, 9.66, 9.68, 9.7, 9.72, 9.74, 9.76, 9.78, 9.8, 9.82, 9.84, 9.86, 9.88, 9.9, 9.92, 9.94, 9.96, 9.98, 10, 10.02, 10.04, 10.06, 10.08, 10.1, 10.12, 10.14, 10.16, 10.18, 10.2, 10.22, 10.24, 10.26, 10.28, 10.3, 10.32, 10.34, 10.36, 10.38, 10.4, 10.42, 10.44, 10.46, 10.48, 10.5, 10.52, 10.54, 10.56, 10.58, 10.6, 10.62, 10.64, 10.66, 10.68, 10.7, 10.72, 10.74, 10.76, 10.78, 10.8, 10.82, 10.84, 10.86, 10.88, 10.9, 10.92, 10.94, 10.96, 10.98, 11, 11.02, 11.04, 11.06, 11.08, 11.1, 11.12, 11.14, 11.16, 11.18, 11.2, 11.22, 11.24, 11.26, 11.28, 11.3, 11.32, 11.34, 11.36, 11.38, 11.4, 11.42, 11.44, 11.46, 11.48, 11.5, 11.52, 11.54, 11.56, 11.58, 11.6, 11.62, 11.64, 11.66, 11.68, 11.7, 11.72, 11.74, 11.76, 11.78, 11.8, 11.82, 11.84, 11.86, 11.88, 11.9, 11.92, 11.94, 11.96, 11.98, 12, 12.02, 12.04, 12.06, 12.08, 12.1, 12.12, 12.14, 12.16, 12.18, 12.2, 12.22, 12.24, 12.26, 12.28, 12.3, 12.32, 12.34, 12.36, 12.38, 12.4, 12.42, 12.44, 12.46, 12.48, 12.5, 12.52, 12.54, 12.56, 12.58, 12.6, 12.62, 12.64, 12.66, 12.68, 12.7, 12.72, 12.74, 12.76, 12.78, 12.8, 12.82, 12.84, 12.86, 12.88, 12.9, 12.92, 12.94, 12.96, 12.98, 13, 13.02, 13.04, 13.06, 13.08, 13.1, 13.12, 13.14, 13.16, 13.18, 13.2, 13.22, 13.24, 13.26, 13.28, 13.3, 13.32, 13.34, 13.36, 13.38, 13.4, 13.42, 13.44, 13.46, 13.48, 13.5, 13.52, 13.54, 13.56, 13.58, 13.6, 13.62, 13.64, 13.66, 13.68, 13.7, 13.72, 13.74, 13.76, 13.78, 13.8, 13.82, 13.84, 13.86, 13.88, 13.9, 13.92, 13.94, 13.96, 13.98, 14, 14.02, 14.04, 14.06, 14.08, 14.1, 14.12, 14.14, 14.16, 14.18, 14.2, 14.22, 14.24, 14.26, 14.28, 14.3, 14.32, 14.34, 14.36, 14.38, 14.4, 14.42, 14.44, 14.46, 14.48, 14.5, 14.52, 14.54, 14.56, 14.58, 14.6, 14.62, 14.64, 14.66, 14.68, 14.7, 14.72, 14.74, 14.76, 14.78, 14.8, 14.82, 14.84, 14.86, 14.88, 14.9, 14.92, 14.94, 14.96, 14.98, 15, 15.02, 15.04, 15.06, 15.08, 15.1, 15.12, 15.14, 15.16, 15.18, 15.2, 15.22, 15.24, 15.26, 15.28, 15.3, 15.32, 15.34, 15.36, 15.38, 15.4, 15.42, 15.44, 15.46, 15.48, 15.5, 15.52, 15.54, 15.56, 15.58, 15.6, 15.62, 15.64, 15.66, 15.68, 15.7, 15.72, 15.74, 15.76, 15.78, 15.8, 15.82, 15.84, 15.86, 15.88, 15.9, 15.92, 15.94, 15.96, 15.98, 16, 16.02, 16.04, 16.06, 16.08, 16.1, 16.12, 16.14, 16.16, 16.18, 16.2, 16.22, 16.24, 16.26, 16.28, 16.3, 16.32, 16.34, 16.36, 16.38, 16.4, 16.42, 16.44, 16.46, 16.48, 16.5, 16.52, 16.54, 16.56, 16.58, 16.6, 16.62, 16.64, 16.66, 16.68, 16.7, 16.72, 16.74, 16.76, 16.78, 16.8, 16.82, 16.84, 16.86, 16.88, 16.9, 16.92, 16.94, 16.96, 16.98, 17, 17.02, 17.04, 17.06, 17.08, 17.1, 17.12, 17.14, 17.16, 17.18, 17.2, 17.22, 17.24, 17.26, 17.28, 17.3, 17.32, 17.34, 17.36, 17.38, 17.4, 17.42, 17.44, 17.46, 17.48, 17.5, 17.52, 17.54, 17.56, 17.58, 17.6, 17.62, 17.64, 17.66, 17.68, 17.7, 17.72, 17.74, 17.76, 17.78, 17.8, 17.82, 17.84, 17.86, 17.88, 17.9, 17.92, 17.94, 17.96, 17.98, 18, 18.02, 18.04, 18.06, 18.08, 18.1, 18.12, 18.14, 18.16, 18.18, 18.2, 18.22, 18.24, 18.26, 18.28, 18.3, 18.32, 18.34, 18.36, 18.38, 18.4, 18.42, 18.44, 18.46, 18.48, 18.5, 18.52, 18.54, 18.56, 18.58, 18.6, 18.62, 18.64, 18.66, 18.68, 18.7, 18.72, 18.74, 18.76, 18.78, 18.8, 18.82, 18.84, 18.86, 18.88, 18.9, 18.92, 18.94, 18.96, 18.98, 19, 19.02, 19.04, 19.06, 19.08, 19.1, 19.12, 19.14, 19.16, 19.18, 19.2, 19.22, 19.24, 19.26, 19.28, 19.3, 19.32, 19.34, 19.36, 19.38, 19.4, 19.42, 19.44, 19.46, 19.48, 19.5, 19.52, 19.54, 19.56, 19.58, 19.6, 19.62, 19.64, 19.66, 19.68, 19.7, 19.72, 19.74, 19.76, 19.78, 19.8, 19.82, 19.84, 19.86, 19.88, 19.9, 19.92, 19.94, 19.96, 19.98, 20];
var vetorBolaX = [1, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.07, 1.08, 1.09, 1.1, 1.11, 1.12, 1.13, 1.14, 1.15, 1.159, 1.169, 1.179, 1.189, 1.199, 1.209, 1.219, 1.229, 1.239, 1.249, 1.259, 1.269, 1.278, 1.288, 1.298, 1.308, 1.318, 1.328, 1.338, 1.348, 1.357, 1.367, 1.377, 1.387, 1.397, 1.407, 1.416, 1.426, 1.436, 1.446, 1.456, 1.466, 1.475, 1.485, 1.495, 1.505, 1.515, 1.524, 1.534, 1.544, 1.554, 1.564, 1.573, 1.583, 1.593, 1.603, 1.612, 1.622, 1.632, 1.642, 1.651, 1.661, 1.671, 1.68, 1.69, 1.7, 1.71, 1.719, 1.729, 1.739, 1.748, 1.758, 1.768, 1.778, 1.787, 1.797, 1.807, 1.816, 1.826, 1.836, 1.845, 1.855, 1.865, 1.874, 1.884, 1.893, 1.903, 1.913, 1.922, 1.932, 1.942, 1.951, 1.961, 1.97, 1.98, 1.99, 1.999, 2.009, 2.018, 2.028, 2.038, 2.047, 2.057, 2.066, 2.076, 2.085, 2.095, 2.104, 2.114, 2.124, 2.133, 2.143, 2.152, 2.162, 2.171, 2.181, 2.19, 2.2, 2.209, 2.219, 2.228, 2.238, 2.247, 2.257, 2.266, 2.276, 2.285, 2.295, 2.304, 2.314, 2.323, 2.332, 2.342, 2.351, 2.361, 2.37, 2.38, 2.389, 2.399, 2.408, 2.417, 2.427, 2.436, 2.446, 2.455, 2.464, 2.474, 2.483, 2.493, 2.502, 2.511, 2.521, 2.53, 2.539, 2.549, 2.558, 2.568, 2.577, 2.586, 2.596, 2.605, 2.614, 2.624, 2.633, 2.642, 2.652, 2.661, 2.67, 2.679, 2.689, 2.698, 2.707, 2.717, 2.726, 2.735, 2.744, 2.754, 2.763, 2.772, 2.782, 2.791, 2.8, 2.809, 2.819, 2.828, 2.837, 2.846, 2.856, 2.865, 2.874, 2.883, 2.892, 2.902, 2.911, 2.92, 2.929, 2.938, 2.948, 2.957, 2.966, 2.975, 2.984, 2.993, 3.003, 3.012, 3.021, 3.03, 3.039, 3.048, 3.058, 3.067, 3.076, 3.085, 3.094, 3.103, 3.112, 3.121, 3.131, 3.14, 3.149, 3.158, 3.167, 3.176, 3.185, 3.194, 3.203, 3.212, 3.221, 3.23, 3.24, 3.249, 3.258, 3.267, 3.276,	3.285, 3.294, 3.303, 3.312, 3.321, 3.33, 3.339, 3.348, 3.357, 3.366, 3.375, 3.384, 3.393, 3.402, 3.411, 3.42, 3.429, 3.438, 3.447, 3.456, 3.465, 3.474, 3.483, 3.492, 3.501, 3.51, 3.518, 3.527, 3.536, 3.545, 3.554, 3.563, 3.572, 3.581, 3.59, 3.599, 3.608, 3.617, 3.625, 3.634, 3.643, 3.652, 3.661, 3.67, 3.679, 3.688, 3.696, 3.705, 3.714, 3.723, 3.732, 3.741, 3.749, 3.758, 3.767, 3.776, 3.785, 3.794, 3.802, 3.811, 3.82, 3.829, 3.838, 3.846, 3.855, 3.864, 3.873, 3.882, 3.89, 3.899, 3.908, 3.917, 3.925, 3.934, 3.943, 3.952, 3.96, 3.969, 3.978, 3.986, 3.995, 4.004, 4.013, 4.021, 4.03, 4.039, 4.047, 4.056, 4.065, 4.074, 4.082, 4.091, 4.1, 4.108, 4.117, 4.126, 4.134, 4.143, 4.152, 4.16, 4.169, 4.177, 4.186, 4.195, 4.203, 4.212, 4.221, 4.229, 4.238, 4.246, 4.255, 4.264, 4.272, 4.281, 4.289, 4.298, 4.307, 4.315, 4.324, 4.332,	4.341, 4.349, 4.358, 4.366, 4.375, 4.384, 4.392, 4.401, 4.409, 4.418, 4.426, 4.435, 4.443, 4.452, 4.46, 4.469, 4.477, 4.486, 4.494, 4.503, 4.511, 4.52, 4.528, 4.537, 4.545, 4.554, 4.562, 4.57, 4.579, 4.587, 4.596, 4.604, 4.613, 4.621, 4.63, 4.638, 4.646, 4.655, 4.663, 4.672, 4.68, 4.688, 4.697, 4.705, 4.714, 4.722, 4.73, 4.739, 4.747, 4.755, 4.764, 4.772, 4.781, 4.789, 4.797, 4.806, 4.814, 4.822, 4.831, 4.839, 4.847, 4.856, 4.864, 4.872, 4.88, 4.889, 4.897, 4.905, 4.914, 4.922, 4.93, 4.938, 4.947, 4.955, 4.963, 4.972, 4.98, 4.988, 4.996, 5.005, 5.013, 5.021, 5.029, 5.038, 5.046, 5.054, 5.062, 5.07, 5.079, 5.087, 5.095, 5.103, 5.111, 5.12, 5.128, 5.136, 5.144, 5.152, 5.16, 5.169, 5.177, 5.185, 5.193, 5.201, 5.209, 5.218, 5.226, 5.234, 5.242, 5.25, 5.258, 5.266, 5.274, 5.283, 5.291, 5.299, 5.307, 5.315, 5.323, 5.331, 5.339, 5.347, 5.355, 5.363, 5.371, 5.38, 5.388, 5.396, 5.404, 5.412, 5.42, 5.428, 5.436, 5.444, 5.452, 5.46, 5.468, 5.476, 5.484, 5.492, 5.5, 5.508, 5.516, 5.524, 5.532, 5.54, 5.548, 5.556, 5.564, 5.572, 5.58, 5.588, 5.596, 5.604, 5.612, 5.62, 5.627, 5.635, 5.643, 5.651, 5.659, 5.667, 5.675, 5.683, 5.691, 5.699, 5.707, 5.715, 5.722, 5.73, 5.738, 5.746, 5.754, 5.762, 5.77, 5.778, 5.785, 5.793, 5.801, 5.809, 5.817, 5.825, 5.832, 5.84, 5.848, 5.856, 5.864, 5.872, 5.879, 5.887, 5.895, 5.903, 5.911, 5.918, 5.926, 5.934, 5.942, 5.95, 5.957, 5.965, 5.973, 5.981, 5.988, 5.996, 6.004, 6.012, 6.019, 6.027, 6.035, 6.042, 6.05, 6.058, 6.066, 6.073, 6.081, 6.089, 6.096, 6.104, 6.112, 6.12, 6.127, 6.135, 6.143, 6.15, 6.158, 6.166, 6.173, 6.181, 6.189, 6.196, 6.204, 6.211, 6.219, 6.227, 6.234, 6.242, 6.25, 6.257, 6.265, 6.272, 6.28, 6.288, 6.295, 6.303, 6.31, 6.318, 6.326, 6.333, 6.341, 6.348, 6.356, 6.363, 6.371, 6.378, 6.386, 6.394, 6.401, 6.409, 6.416, 6.424, 6.431, 6.439, 6.446, 6.454, 6.461, 6.469, 6.476, 6.484, 6.491, 6.499, 6.506, 6.514, 6.521, 6.529, 6.536, 6.544, 6.551, 6.558, 6.566, 6.573, 6.581, 6.588, 6.596, 6.603, 6.611, 6.618, 6.625, 6.633, 6.64, 6.648, 6.655, 6.662, 6.67, 6.677, 6.685, 6.692, 6.699, 6.707, 6.714, 6.721, 6.729, 6.736, 6.744, 6.751, 6.758, 6.766, 6.773, 6.78, 6.788, 6.795, 6.802, 6.81, 6.817, 6.824, 6.831, 6.839, 6.846, 6.853, 6.861, 6.868, 6.875, 6.882, 6.89, 6.897, 6.904, 6.912, 6.919, 6.926, 6.933, 6.941, 6.948, 6.955, 6.962, 6.97, 6.977, 6.984, 6.991, 6.998, 7.006, 7.013, 7.02, 7.027, 7.034, 7.042, 7.049, 7.056, 7.063, 7.07, 7.077, 7.085, 7.092, 7.099, 7.106, 7.113, 7.12, 7.128, 7.135, 7.142, 7.149, 7.156, 7.163, 7.17, 7.177, 7.185, 7.192, 7.199, 7.206, 7.213, 7.22, 7.227, 7.234, 7.241, 7.248, 7.255, 7.262, 7.27, 7.277, 7.284, 7.291, 7.298, 7.305, 7.312, 7.319, 7.326, 7.333, 7.34, 7.347, 7.354, 7.361, 7.368, 7.375, 7.382, 7.389, 7.396, 7.403, 7.41, 7.417, 7.424, 7.431, 7.438, 7.445, 7.452, 7.459, 7.466, 7.473, 7.48, 7.486, 7.493, 7.5, 7.507, 7.514, 7.521, 7.528, 7.535, 7.542, 7.549, 7.556, 7.563, 7.569, 7.576, 7.583, 7.59, 7.597, 7.604, 7.611, 7.618, 7.624, 7.631, 7.638, 7.645, 7.652, 7.659, 7.665, 7.672, 7.679, 7.686, 7.693, 7.7, 7.706, 7.713, 7.72, 7.727, 7.734, 7.74, 7.747, 7.754, 7.761, 7.768, 7.774, 7.781, 7.788, 7.795, 7.801, 7.808, 7.815, 7.822, 7.828, 7.835, 7.842, 7.848, 7.855, 7.862, 7.869, 7.875, 7.882, 7.889, 7.895, 7.902, 7.909, 7.916, 7.922, 7.929, 7.936, 7.942, 7.949, 7.956, 7.962, 7.969, 7.976, 7.982, 7.989, 7.995, 8.002, 8.009, 8.015, 8.022, 8.029, 8.035, 8.042, 8.048, 8.055, 8.062, 8.068, 8.075, 8.081, 8.088, 8.095, 8.101, 8.108, 8.114, 8.121, 8.127, 8.134, 8.14, 8.147, 8.154, 8.16, 8.167, 8.173, 8.18, 8.186, 8.193, 8.199, 8.206, 8.212, 8.219, 8.225, 8.232, 8.238, 8.245, 8.251, 8.258, 8.264, 8.271, 8.277, 8.284, 8.29, 8.296, 8.303, 8.309, 8.316, 8.322, 8.329, 8.335, 8.342, 8.348, 8.354, 8.361, 8.367, 8.374, 8.38, 8.386, 8.393, 8.399, 8.406, 8.412, 8.418, 8.425, 8.431, 8.437, 8.444, 8.45, 8.457, 8.463, 8.469, 8.476, 8.482, 8.488, 8.495, 8.501, 8.507, 8.514, 8.52, 8.526, 8.532, 8.539, 8.545, 8.551, 8.558, 8.564, 8.57, 8.576, 8.583, 8.589, 8.595, 8.602, 8.608, 8.614, 8.62, 8.627, 8.633, 8.639, 8.645, 8.652, 8.658, 8.664, 8.67, 8.676, 8.683, 8.689, 8.695, 8.701, 8.707, 8.714, 8.72, 8.726, 8.732, 8.738, 8.744, 8.751, 8.757, 8.763, 8.769, 8.775, 8.781, 8.788, 8.794, 8.8, 8.806, 8.812, 8.818, 8.824, 8.83, 8.837, 8.843, 8.849, 8.855, 8.861, 8.867, 8.873, 8.879, 8.885, 8.891, 8.897, 8.903, 8.91, 8.916, 8.922, 8.928, 8.934, 8.94, 8.946, 8.952, 8.958, 8.964, 8.97, 8.976, 8.982, 8.988, 8.994, 9];
var vetorBolaY = [0.5, 0.508, 0.516, 0.524, 0.532, 0.54, 0.548, 0.556, 0.564, 0.572, 0.58, 0.588, 0.596, 0.603, 0.611, 0.619, 0.627, 0.635, 0.643, 0.651, 0.659, 0.667, 0.674, 0.682, 0.69, 0.698, 0.706, 0.714, 0.721, 0.729, 0.737, 0.745, 0.753, 0.761, 0.768, 0.776, 0.784, 0.792, 0.799, 0.807, 0.815, 0.823, 0.83, 0.838, 0.846, 0.854, 0.861, 0.869, 0.877, 0.884, 0.892, 0.9, 0.907, 0.915, 0.923, 0.93, 0.938, 0.946, 0.953, 0.961, 0.968, 0.976, 0.984, 0.991, 0.999, 1.006, 1.014, 1.022, 1.029, 1.037, 1.044, 1.052, 1.059, 1.067, 1.074, 1.082, 1.09, 1.097, 1.105, 1.112, 1.12, 1.127, 1.134, 1.142, 1.149, 1.157, 1.164, 1.172, 1.179, 1.187, 1.194, 1.202, 1.209, 1.216, 1.224, 1.231, 1.239, 1.246, 1.253, 1.261, 1.268, 1.275, 1.283, 1.29, 1.297, 1.305, 1.312, 1.319, 1.327, 1.334, 1.341, 1.349, 1.356, 1.363, 1.37, 1.378, 1.385, 1.392, 1.399, 1.407, 1.414, 1.421, 1.428, 1.436, 1.443, 1.45, 1.457, 1.464, 1.472, 1.479, 1.486, 1.493, 1.5, 1.507, 1.515, 1.522, 1.529, 1.536, 1.543, 1.55, 1.557, 1.564, 1.571, 1.579, 1.586, 1.593, 1.6, 1.607, 1.614, 1.621, 1.628, 1.635, 1.642, 1.649, 1.656, 1.663, 1.67, 1.677, 1.684, 1.691, 1.698, 1.705, 1.712, 1.719, 1.726, 1.733, 1.74, 1.747, 1.754, 1.761, 1.768, 1.774, 1.781, 1.788, 1.795, 1.802, 1.809, 1.816, 1.823, 1.829, 1.836, 1.843, 1.85, 1.857, 1.864, 1.87, 1.877, 1.884, 1.891, 1.898, 1.904, 1.911, 1.918, 1.925, 1.932, 1.938, 1.945, 1.952, 1.959, 1.965, 1.972, 1.979, 1.985, 1.992, 1.999, 2.006, 2.012, 2.019, 2.026, 2.032, 2.039, 2.046, 2.052, 2.059, 2.065, 2.072, 2.079, 2.085, 2.092, 2.099, 2.105, 2.112, 2.118, 2.125, 2.131, 2.138, 2.145, 2.151, 2.158, 2.164, 2.171, 2.177, 2.184, 2.19, 2.197, 2.203, 2.21, 2.216, 2.223, 2.229, 2.236, 2.242, 2.249, 2.255, 2.261, 2.268, 2.274, 2.281, 2.287, 2.294, 2.3, 2.306, 2.313, 2.319, 2.326, 2.332, 2.338, 2.345, 2.351, 2.357, 2.364, 2.37, 2.376, 2.383, 2.389, 2.395, 2.402, 2.408, 2.414, 2.42, 2.427, 2.433, 2.439, 2.446, 2.452, 2.458, 2.464, 2.47, 2.477, 2.483, 2.489, 2.495, 2.502, 2.508, 2.514, 2.52, 2.526, 2.532, 2.539, 2.545, 2.551, 2.557, 2.563, 2.569, 2.575, 2.582, 2.588, 2.594, 2.6, 2.606, 2.612, 2.618, 2.624, 2.63, 2.636, 2.642, 2.648, 2.654, 2.66, 2.666, 2.672, 2.678, 2.684, 2.69, 2.696, 2.702, 2.708, 2.714, 2.72, 2.726, 2.732, 2.738, 2.744, 2.75, 2.756, 2.762, 2.768, 2.774, 2.78, 2.786, 2.792, 2.797, 2.803, 2.809, 2.815, 2.821, 2.827, 2.833, 2.838, 2.844, 2.85, 2.856, 2.862, 2.868, 2.873, 2.879, 2.885, 2.891, 2.896, 2.902, 2.908, 2.914, 2.92, 2.925, 2.931, 2.937, 2.942, 2.948, 2.954, 2.96, 2.965, 2.971, 2.977, 2.982, 2.988, 2.994, 2.999, 3.005, 3.011, 3.016, 3.022, 3.028, 3.033, 3.039, 3.044, 3.05, 3.056, 3.061, 3.067, 3.072, 3.078, 3.083, 3.089, 3.095, 3.1, 3.106, 3.111, 3.117, 3.122, 3.128, 3.133, 3.139, 3.144, 3.15, 3.155, 3.161, 3.166, 3.172, 3.177, 3.183, 3.188, 3.193, 3.199, 3.204, 3.21, 3.215, 3.221, 3.226, 3.231, 3.237, 3.242, 3.247, 3.253, 3.258, 3.264, 3.269, 3.274, 3.28, 3.285, 3.29, 3.296, 3.301, 3.306, 3.311, 3.317, 3.322, 3.327, 3.333, 3.338, 3.343, 3.348, 3.354, 3.359, 3.364, 3.369, 3.374, 3.38, 3.385, 3.39, 3.395, 3.4, 3.406, 3.411, 3.416, 3.421, 3.426, 3.431, 3.437, 3.442, 3.447, 3.452, 3.457, 3.462, 3.467, 3.472, 3.478, 3.483, 3.488, 3.493, 3.498, 3.503, 3.508, 3.513, 3.518, 3.523, 3.528, 3.533, 3.538, 3.543, 3.548, 3.553, 3.558, 3.563, 3.568, 3.573, 3.578, 3.583, 3.588, 3.593, 3.598, 3.603, 3.608, 3.613, 3.617, 3.622, 3.627, 3.632, 3.637, 3.642, 3.647, 3.652, 3.657, 3.661, 3.666, 3.671, 3.676, 3.681, 3.686, 3.69, 3.695, 3.7, 3.705, 3.71, 3.714, 3.719, 3.724, 3.729, 3.733, 3.738, 3.743, 3.748, 3.752, 3.757, 3.762, 3.767, 3.771, 3.776, 3.781, 3.785, 3.79, 3.795, 3.799, 3.804, 3.809, 3.813, 3.818, 3.823, 3.827, 3.832, 3.837, 3.841, 3.846, 3.85, 3.855, 3.86, 3.864, 3.869, 3.873, 3.878, 3.882, 3.887, 3.891, 3.896, 3.9, 3.905, 3.91, 3.914, 3.919, 3.923, 3.928, 3.932, 3.936, 3.941, 3.945, 3.95, 3.954, 3.959, 3.963, 3.968, 3.972, 3.976, 3.981, 3.985, 3.99, 3.994, 3.998, 4.003, 4.007, 4.012, 4.016, 4.02, 4.025, 4.029, 4.033, 4.038, 4.042, 4.046, 4.051, 4.055, 4.059, 4.064, 4.068, 4.072, 4.076, 4.081, 4.085, 4.089, 4.093, 4.098, 4.102, 4.106, 4.11, 4.115, 4.119, 4.123, 4.127, 4.131, 4.135, 4.14, 4.144, 4.148, 4.152, 4.156, 4.16, 4.165, 4.169, 4.173, 4.177, 4.181, 4.185, 4.189, 4.193, 4.197, 4.202, 4.206, 4.21, 4.214, 4.218, 4.222, 4.226, 4.23, 4.234, 4.238, 4.242, 4.246, 4.25, 4.254, 4.258, 4.262, 4.266, 4.27, 4.274, 4.278, 4.282, 4.286, 4.29, 4.294, 4.298, 4.301, 4.305, 4.309, 4.313, 4.317, 4.321, 4.325, 4.329, 4.333, 4.336, 4.34, 4.344, 4.348, 4.352, 4.356, 4.359, 4.363, 4.367, 4.371, 4.375, 4.379, 4.382, 4.386, 4.39, 4.394, 4.397, 4.401, 4.405, 4.409, 4.412, 4.416, 4.42, 4.424, 4.427, 4.431, 4.435, 4.438, 4.442, 4.446, 4.449, 4.453, 4.457, 4.46, 4.464, 4.468, 4.471, 4.475, 4.478, 4.482, 4.486, 4.489, 4.493, 4.496, 4.5, 4.504, 4.507, 4.511, 4.514, 4.518, 4.521, 4.525, 4.528, 4.532, 4.536, 4.539, 4.543, 4.546, 4.55, 4.553, 4.556, 4.56, 4.563, 4.567, 4.57, 4.574, 4.577, 4.581, 4.584, 4.588, 4.591, 4.594, 4.598, 4.601, 4.605, 4.608, 4.611, 4.615, 4.618, 4.621, 4.625, 4.628, 4.631, 4.635, 4.638, 4.641, 4.645, 4.648, 4.651, 4.655, 4.658, 4.661, 4.664, 4.668, 4.671, 4.674, 4.677, 4.681, 4.684, 4.687, 4.69, 4.694, 4.697, 4.7, 4.703, 4.706, 4.71, 4.713, 4.716, 4.719, 4.722, 4.725, 4.729, 4.732, 4.735, 4.738, 4.741, 4.744, 4.747, 4.75, 4.753, 4.757, 4.76, 4.763, 4.766, 4.769, 4.772, 4.775, 4.778, 4.781, 4.784, 4.787, 4.79, 4.793, 4.796, 4.799, 4.802, 4.805, 4.808, 4.811, 4.814, 4.817, 4.82, 4.823, 4.826, 4.829, 4.832, 4.835, 4.838, 4.84, 4.843, 4.846, 4.849, 4.852, 4.855, 4.858, 4.861, 4.863, 4.866, 4.869, 4.872, 4.875, 4.878, 4.88, 4.883, 4.886, 4.889, 4.892, 4.894, 4.897, 4.9, 4.903, 4.906, 4.908, 4.911, 4.914, 4.917, 4.919, 4.922, 4.925, 4.927, 4.93, 4.933, 4.936, 4.938, 4.941, 4.944, 4.946, 4.949, 4.952, 4.954, 4.957, 4.959, 4.962, 4.965, 4.967, 4.97, 4.973, 4.975, 4.978, 4.98, 4.983, 4.985, 4.988, 4.991, 4.993, 4.996, 4.998, 5.001, 5.003, 5.006, 5.008, 5.011, 5.013, 5.016, 5.018, 5.021, 5.023, 5.026, 5.028, 5.031, 5.033, 5.035, 5.038, 5.04, 5.043, 5.045, 5.048, 5.05, 5.052, 5.055, 5.057, 5.06, 5.062, 5.064, 5.067, 5.069, 5.071, 5.074, 5.076, 5.078, 5.081, 5.083, 5.085, 5.088, 5.09, 5.092, 5.094, 5.097, 5.099, 5.101, 5.104, 5.106, 5.108, 5.11, 5.112, 5.115, 5.117, 5.119, 5.121, 5.124, 5.126, 5.128, 5.13, 5.132, 5.134, 5.137, 5.139, 5.141, 5.143, 5.145, 5.147, 5.149, 5.152, 5.154, 5.156, 5.158, 5.16, 5.162, 5.164, 5.166, 5.168, 5.17, 5.172, 5.174, 5.176, 5.178, 5.18, 5.182, 5.184, 5.186, 5.188, 5.19, 5.192, 5.194, 5.196, 5.198, 5.2, 5.202, 5.204, 5.206, 5.208, 5.21, 5.212, 5.214, 5.216, 5.218, 5.22, 5.222, 5.223, 5.225, 5.227, 5.229, 5.231, 5.233, 5.235, 5.236, 5.238, 5.24, 5.242, 5.244, 5.246, 5.247, 5.249, 5.251, 5.253, 5.254, 5.256, 5.258, 5.26, 5.262, 5.263, 5.265, 5.267, 5.268, 5.27, 5.272, 5.274, 5.275, 5.277, 5.279, 5.28, 5.282, 5.284, 5.285, 5.287, 5.289, 5.29, 5.292, 5.294, 5.295, 5.297, 5.298, 5.3];
var vetorDistancia = [];
var vetorRoboX = [];
var vetorRoboY = [];
var vetorVelocidade = [];
var velocidadeMax = 2.33;
var vetorBolaInterceptacaoX = [];
var vetorBolaInterceptacaoY = [];
var vetorInterceptacaoTempo = [];
var vetorVelocidadeInterceptacaoX = [];
var vetorVelocidadeInterceptacaoY = [];
var vetorBolaVelocidadeX = [];
var vetorBolaVelocidadeY = [];
var vetorAceleracaoRoboX = [];
var vetorAceleracaoRoboY = [];
var vetorAceleracaoBolaX = [];
var vetorAceleracaoBolaY = [];
var i = 0;

//Esta função serve para reiniciar a página
function recarrega() {
    location.reload()
}

    /*Função para calcular a distância por meio de distância Euclidiana, recebe os valores iniciais de X e Y do robô.
   recebe essas coordenadas e calcula a partir do ponto inicial da bola, que é X = 1 e Y = 0.5 */
function calculaDistancia(){
    vetorRoboX[0] = Number(document.getElementById("x").value);
    vetorRoboY[0] = Number(document.getElementById("y").value);

    vetorDistancia[0] = Math.sqrt(Math.pow((vetorBolaX[0] - vetorRoboX[0]), 2) + Math.pow((vetorBolaY[0] - vetorRoboY[0]), 2));
	
}

//Função para calcular e colocar num vetor as posições do robô em cada tempo
function vetorRobo(){

    /* A função "do" serve para colocar uma condição enquanto uma outra condição não é satisfeita, neste exemplo, os cálculos abaixo serão
realizados até o momento em que a distância entre bola e robô for menor que o raio de interceptação, declarado no começo do código com o valor de 0.15 */
    /*Dentro da função "do" temos, os cálculos de:
        *distancia entre bola e robô  cada ponto percorrido por ambos;
        *cosseno e seno para determinar direções para o robô;
        *vetor do robô e x e y;
        *vetor da velocidade do robô
        *vetor da bola até a interceptação em x e y;
        *vetor do tempo até a interceptação;
        *vetor da velocidade da bola até a interceptação nos eixos x e y;
        *vetor de velocidade do robô até a interceptação;
        *vetor de aceleração do robô;
        *vetor de aceleração da bola; */
    do{
        vetorDistancia[i] = Math.sqrt(Math.pow((vetorBolaX[i] - vetorRoboX[i]), 2) + Math.pow((vetorBolaY[i] - vetorRoboY[i]), 2));
        cos = (vetorBolaX[i] - vetorRoboX[i]) / vetorDistancia[i];
        sen = (vetorBolaY[i] - vetorRoboY[i]) / vetorDistancia[i];
        vetorRoboX[i+1] = vetorRoboX[i] + cos*(aceleracao*0.02 + 0.5*0.02*0.02);
        vetorRoboY[i+1] = vetorRoboY[i] + sen*(aceleracao*0.02 + 0.5*0.02*0.02);
        vetorVelocidade[i] = vetorTempo[i]*2.64;
		vetorBolaInterceptacaoX[i] = vetorBolaX[i];
        vetorBolaInterceptacaoY[i] = vetorBolaY[i];
        vetorInterceptacaoTempo[i] = vetorTempo[i];
        vetorVelocidadeInterceptacaoX[i] = vetorTempo[i] * 2.64;
        vetorVelocidadeInterceptacaoY[i] = vetorTempo[i] * 2.64;
        vetorBolaVelocidadeX[i] = vetorTempo[i]*(-0.010) + 0.5;
        vetorBolaVelocidadeY[i] = vetorTempo[i]*(-0.016) + 0.4;
        vetorAceleracaoRoboX[i] = aceleracao;
        vetorAceleracaoRoboY[i] = aceleracao;
        vetorAceleracaoBolaX[i] = (-0.010);
        vetorAceleracaoBolaY[i] = (-0.016);
		if(vetorVelocidade[i] >= velocidadeMaxima){
			vetorVelocidade[i] = velocidadeMaxima;
			vetorVelocidadeInterceptacaoX[i] = velocidadeMaxima;
			vetorVelocidadeInterceptacaoY[i] = velocidadeMaxima;
		}
		/*if(vetorDistancia[i] > 0.15){
			alert("Distância entre a bola e o robô: " + vetorDistancia[i]);
		}
		else{
			alert("Pegou a bola!");
		}
		*/		
	    i++;
        //i++ é a iteração para o cálculo e organização dos vetores

     /*o while é o "enquanto a condição não ser satisfeita" a condição é enquanto o a distância entre
	 o robo e a bola for maior ou igual ao raio de interceptação, que é 0.13. */
    }while(vetorDistancia[i-1] >= raio);
	
}

//A função abaixo gera o gráfico da trajetória da bola e robô até o momento de interceptação
function geraGrafico1(){
    var linha1 = {
        x: vetorRoboX,
        y: vetorRoboY,
        name:'Trajeto do robô',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 69, 0)',
            width: 1,	
        }
    };

    var linha2 = {
        x: vetorBolaInterceptacaoX,
        y: vetorBolaInterceptacaoY,
        name: 'Trajeto da bola',
        mode: 'lines+markers',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1,
        }
    };

    var data = [linha2, linha1];
	
    var layout = {
        title:'Gráfico 1: Trajetórias da bola e robô até a interceptação',
		width: 730,
        height: 730,
		xaxis: {
			title: 'x', 
		}, 
		yaxis: {
			title: 'y',
		}
}; 

    Plotly.newPlot('myChart', data, layout);
}

//A função abaixo gera o gráfico da trajetória da bola até a interceptação com x e y em função do tempo
function geraGrafico2(){
    var linha1 = {
        x: vetorInterceptacaoTempo,
        y: vetorBolaInterceptacaoX,
        name: 'Bola X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 69, 0)',
            width: 1
        }
    };

    var linha2 = {
        x: vetorInterceptacaoTempo,
        y: vetorBolaInterceptacaoY,
        name: 'Bola Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(123, 104, 238)',
            width: 1
        }
    };
	
	var linha3 = {
    x: vetorInterceptacaoTempo,
    y: vetorRoboX,
    name: 'Robô X(t)',
    mode: 'lines+markers',
    line: {
            color: 'rgb(0, 100, 0)',
            width: 1
        }
    };

    var linha4 = {
        x: vetorInterceptacaoTempo,
        y: vetorRoboY,
        name: 'Robô Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 0, 0)',
            width: 1
        }
    };

    var data = [linha1, linha2, linha3, linha4];

    var layout = {
        title:'Gráfico 2: Trajetórias da bola e robô até a interceptação com X(t) e Y(t)',
        width: 730,
        height: 730,
		xaxis: {
			title: 'Tempo em (s)', 
		}, 
		yaxis: {
			title: 'Trajetórias da bola e robô nos eixos',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}

//A função abaixo gera o gráfico da velocidade robô em com x e y em função do tempo
function geraGrafico3(){
	var linha1 = {
    x: vetorInterceptacaoTempo,
    y: vetorVelocidadeInterceptacaoX,
    name: 'Velocidade do robô com X(t)',
    mode: 'lines+markers',
    line: {
        color: 'rgb(255, 69, 0)',
        width: 1
        }
    };

    var linha2 = {
    x: vetorInterceptacaoTempo,
    y: vetorVelocidadeInterceptacaoY,
    name: 'Velocidade do robô com Y(t)',
    mode: 'lines+markers',
    line: {
        color: 'rgb(123, 104, 238)', 
        width: 1
    }
};

	 var linha3 = {
	x: vetorInterceptacaoTempo,
	y: vetorBolaVelocidadeX,
	name: 'Velocidade da bola com X(t)',
	mode: 'lines+markers',
	line: {
	color: 'rgb(0, 100, 0)', 
	width: 1
	}
};

	var linha4 = {
	x: vetorInterceptacaoTempo,
	y: vetorBolaVelocidadeY,
	name: 'Velocidade da bola com Y(t)',
	mode: 'lines+markers',
	line: {
	color: 'rgb(255, 0, 0)', 
	width: 1
	}
};

    var data = [linha1, linha2, linha3, linha4];

	var layout = {
    title:'Gráfico 3: Velocidades da bola e do robô com X(t) e Y(t) ',
    width: 730,
    height: 730,
	xaxis: {
		title: 'Tempo (s)', 
	}, 
	yaxis: {
		title: 'Velocidade em (m/s)',
	}
};

Plotly.newPlot('myChart', data, layout);
}

//A função abaixo gera o gráfico da aceleração do robô com x e y em função do tempo
function geraGrafico4(){
    var linha1 = {
        x: vetorInterceptacaoTempo,
        y: vetorAceleracaoRoboX,
        name: 'Aceleração do robô com X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 69, 0)',    
            width: 1
        }
    };

    var linha2 = {
        x: vetorInterceptacaoTempo,
        y: vetorAceleracaoRoboY,
        name: 'Aceleração do robô com Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(123, 104, 238)',
            width: 1
        }
    };
	
	var linha3 = {
    x: vetorInterceptacaoTempo,
    y: vetorAceleracaoBolaX,
    name: 'Aceleração da bola com X(t)',
    mode: 'lines+markers',
    line: {
        color: 'rgb(0, 100, 0)',
        width: 1
        }
    };

    var linha4 = {
        x: vetorInterceptacaoTempo,
        y: vetorAceleracaoBolaY,
        name: 'Aceleração da bola com Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(255, 0, 0)',
            width: 1
        }
    };


    var data = [linha1, linha2, linha3, linha4];

    var layout = {
        title:'Gráfico 4: Aceleração da bola e robô com X(t) e Y(t) ',
        width: 730,
        height: 730,
		xaxis: {
			title: 'Tempo em (s)', 
		}, 
		yaxis: {
			title: 'Aceleração em (m/s)',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}


//A função abaixo gera o gráfico da aceleração da bola com x e y em função do tempo
/*function geraGrafico41(){
    var linha1 = {
        x: vetorInterceptacaoTempo,
        y: vetorAceleracaoBolaX,
        name: 'Aceleração da bola com X(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(210, 105, 30))',
            width: 1
        }
    };

    var linha2 = {
        x: vetorInterceptacaoTempo,
        y: vetorAceleracaoBolaY,
        name: 'Aceleração da bola com Y(t)',
        mode: 'lines+markers',
        line: {
            color: 'rgb(0, 0, 0)',
            width: 1
        }
    };

    var data = [linha1, linha2];

    var layout = {
        title:'Gráfico 4.1: Aceleração da bola com X(t) e Y(t) ',
        width: 750,
        height: 750,
		xaxis: {
			title: 'Tempo em (s)', 
		}, 
		yaxis: {
			title: 'Aceleração em (m/s)',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}
*/

//A função abaixo gera o gráfico da distância entre o robô e a bola até a interceptação em função do tempo
function geraGrafico5(){
    var linha1 = {
        x: vetorInterceptacaoTempo,
        y: vetorDistancia,
        name: 'Distância',
        mode: 'lines+markers',
        line: {
            color: 'rgb(0, 0, 205))',
            width: 1
        }
    };

    var data = [linha1];

    var layout = {
        title:'Gráfico 5: Distância entre o robô e a bola até a interceptação em função do tempo  ',
        width: 730,
        height: 730,
		xaxis: {
			title: 'Tempo (s)', 
		}, 
		yaxis: {
			title: 'Distância entre a bola e o robô (m/s)',
		}
    };

    Plotly.newPlot('myChart', data, layout);
}
