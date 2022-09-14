/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-image-set) es2022 production */
var s = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of m(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? s(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U 3B 4B",
        66: "V W",
        257: "Y Z c d e f g h i j k l m n o a H sB",
        772: "X",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r",
        164:
          "0 1 2 3 4 5 6 7 8 9 s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p 7B tB 8B",
        132: "A B C K uB lB mB CC",
        164: "J D E F 9B AC BC",
        516: "L G DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "tB LC 0B MC",
        132: "SC TC UC VC WC XC YC ZC aC bC",
        164: "E NC OC PC QC RC",
        516: "cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 2: "oB I gC hC iC jC 0B", 164: "H kC lC" },
      J: { 2: "D", 164: "A" },
      K: { 2: "A B C lB zB mB", 164: "b" },
      L: { 164: "H" },
      M: { 257: "a" },
      N: { 2: "A B" },
      O: { 164: "mC" },
      P: { 164: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 164: "zC" },
      R: { 164: "0C" },
      S: { 2: "1C" },
    },
    B: 5,
    C: "CSS image-set",
  };
});
var r = p(d()),
  { A: G, B: H, C: I } = r,
  { default: f, ...D } = r,
  c = f !== void 0 ? f : D;
export { c as default, G as A, H as B, I as C };
