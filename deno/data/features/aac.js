/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/aac) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !n.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = u(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? l(m(C)) : {},
  p(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = s((G, a) => {
  a.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "2B oB I p J D E F A B C K L G M N O q r s 3B 4B",
        132:
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "I p J D E F",
        16: "A B",
      },
      E: {
        1: "I p J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        2: "7B tB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "F B C GC HC IC JC lB zB KC mB",
      },
      G: {
        1: "E LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        16: "tB",
      },
      H: { 2: "fC" },
      I: { 1: "oB I H jC 0B kC lC", 2: "gC hC iC" },
      J: { 1: "A", 2: "D" },
      K: { 1: "b", 2: "A B C lB zB mB" },
      L: { 1: "H" },
      M: { 132: "a" },
      N: { 1: "A", 2: "B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 132: "1C" },
    },
    B: 6,
    C: "AAC audio file format",
  };
});
var r = D(d()),
  { A: H, B: I, C: c } = r,
  { default: f, ...E } = r,
  x = f !== void 0 ? f : E;
export { c as C, H as A, I as B, x as default };
