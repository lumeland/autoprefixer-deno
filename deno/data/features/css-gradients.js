/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-gradients) es2022 production */
var n = Object.create;
var o = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, G = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !G.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = s(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? n(u(C)) : {},
  i(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((E, A) => {
  A.exports = {
    A: {
      A: { 1: "A B", 2: "J D E F 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB 3B",
        260: "0 1 2 3 4 5 6 M N O q r s t u v w x y z",
        292: "I p J D E F A B C K L G 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "A B C K L G M N O q r s t u v w",
        548: "I p J D E F",
      },
      E: {
        1: "wB xB yB nB FC",
        2: "7B tB",
        260: "D E F A B C K L G 9B AC BC uB lB mB CC DC EC vB",
        292: "J 8B",
        804: "I p",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z mB",
        2: "F B GC HC IC JC",
        33: "C KC",
        164: "lB zB",
      },
      G: {
        1: "wB xB yB nB",
        260: "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB",
        292: "MC NC",
        804: "tB LC 0B",
      },
      H: { 2: "fC" },
      I: { 1: "H kC lC", 33: "I jC 0B", 548: "oB gC hC iC" },
      J: { 1: "A", 548: "D" },
      K: { 1: "b mB", 2: "A B", 33: "C", 164: "lB zB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 4,
    C: "CSS Gradients",
  };
});
var f = m(a()),
  { A: F, B: H, C: I } = f,
  { default: r, ...p } = f,
  c = r !== void 0 ? r : p;
export { c as default, F as A, H as B, I as C };
