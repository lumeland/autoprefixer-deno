/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-boxshadow) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var x = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of u(B)) {
      !n.call(C, o) && o !== e && d(C, o, {
        get: () => B[o],
        enumerable: !(t = l(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? s(S(C)) : {},
  x(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = p((G, A) => {
  A.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB",
        33: "1B 2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        33: "I n J D E F",
      },
      E: {
        1: "J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        33: "n",
        164: "I 4B sB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z GC HC jB xB IC kB",
        2: "F EC FC",
      },
      G: {
        1: "E KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        33: "JC yB",
        164: "sB",
      },
      H: { 2: "dC" },
      I: { 1: "I H hC yB iC jC", 164: "mB eC fC gC" },
      J: { 1: "A", 33: "D" },
      K: { 1: "B C b jB xB kB", 2: "A" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS3 Box-shadow",
  };
});
var r = D(a()),
  { A: H, B: I, C: c } = r,
  { default: f, ...E } = r,
  i = f !== void 0 ? f : E;
export { c as C, H as A, I as B, i as default };
