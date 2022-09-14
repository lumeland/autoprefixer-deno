/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-cross-fade) es2022 production */
var s = Object.create;
var d = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var F = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !l.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = f(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? s(F(C)) : {},
  c(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((D, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB 3B 4B",
      },
      D: {
        2: "I p J D E F A B C K L G M",
        33:
          "0 1 2 3 4 5 6 7 8 9 N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "A B C K L G uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "I p 7B tB",
        33: "J D E F 8B 9B AC BC",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        1: "SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B",
        33: "E MC NC OC PC QC RC",
      },
      H: { 2: "fC" },
      I: { 2: "oB I gC hC iC jC 0B", 33: "H kC lC" },
      J: { 2: "D A" },
      K: { 2: "A B C lB zB mB", 33: "b" },
      L: { 33: "H" },
      M: { 2: "a" },
      N: { 2: "A B" },
      O: { 33: "mC" },
      P: { 33: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 33: "zC" },
      R: { 33: "0C" },
      S: { 2: "1C" },
    },
    B: 4,
    C: "CSS Cross-Fade Function",
  };
});
var r = i(a()),
  { A: E, B: G, C: H } = r,
  { default: n, ...m } = r,
  I = n !== void 0 ? n : m;
export { E as A, G as B, H as C, I as default };
