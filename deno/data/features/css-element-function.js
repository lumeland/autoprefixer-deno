/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-element-function) es2022 production */
var l = Object.create;
var n = Object.defineProperty;
var r = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var m = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !s.call(C, t) && t !== e && n(C, t, {
        get: () => B[t],
        enumerable: !(o = r(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? l(m(C)) : {},
  c(
    B || !C || !C.__esModule
      ? n(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = S((E, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B 1B" },
      B: {
        2: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        33:
          "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        164: "2B oB 3B 4B",
      },
      D: {
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z GC HC IC JC lB zB KC mB",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 2: "fC" },
      I: { 2: "oB I H gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 2: "A B C b lB zB mB" },
      L: { 2: "H" },
      M: { 33: "a" },
      N: { 2: "A B" },
      O: { 2: "mC" },
      P: { 2: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 2: "zC" },
      R: { 2: "0C" },
      S: { 33: "1C" },
    },
    B: 5,
    C: "CSS element() function",
  };
});
var a = i(d()),
  { A: F, B: G, C: H } = a,
  { default: f, ...p } = a,
  I = f !== void 0 ? f : p;
export { F as A, G as B, H as C, I as default };
