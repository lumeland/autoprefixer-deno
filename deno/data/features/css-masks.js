/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-masks) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var n = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, S = Object.prototype.hasOwnProperty;
var m = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of n(B)) {
      !S.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? r(u(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = m((G, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        3138: "N",
        12292: "O",
      },
      C: {
        1: "OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB",
        260:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB 3B 4B",
      },
      D: {
        164:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        1: "wB xB yB nB FC",
        2: "7B tB",
        164: "I p J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        1: "wB xB yB nB",
        164:
          "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB",
      },
      H: { 2: "fC" },
      I: { 164: "H kC lC", 676: "oB I gC hC iC jC 0B" },
      J: { 164: "D A" },
      K: { 2: "A B C lB zB mB", 164: "b" },
      L: { 164: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 164: "mC" },
      P: { 164: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 164: "zC" },
      R: { 164: "0C" },
      S: { 260: "1C" },
    },
    B: 4,
    C: "CSS Masks",
  };
});
var f = D(d()),
  { A: H, B: I, C: M } = f,
  { default: s, ...E } = f,
  c = s !== void 0 ? s : E;
export { c as default, H as A, I as B, M as C };
