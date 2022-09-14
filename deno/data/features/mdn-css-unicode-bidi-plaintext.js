/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/mdn-css-unicode-bidi-plaintext) es2022 production */
var f = Object.create;
var d = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var A = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !p.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var m = (
  C,
  B,
  e,
) => (e = C != null ? f(A(C)) : {},
  c(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var i = s((F, a) => {
  a.exports = {
    A: {
      D: {
        1: "JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB",
      },
      L: { 1: "H" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p J D E F 3B 4B",
        33:
          "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        1: "6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 F B C G M N O q r s t u v w x y z GC HC IC JC lB zB KC mB",
      },
      K: { 1: "b", 2: "A B C lB zB mB" },
      E: {
        1: "B C K L G lB mB CC DC EC vB wB xB yB nB",
        2: "I p 7B tB 8B FC",
        33: "J D E F A 9B AC BC uB",
      },
      G: {
        1: "UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        2: "tB LC 0B MC",
        33: "E NC OC PC QC RC SC TC",
      },
      P: { 1: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
    },
    B: 6,
    C: "plaintext from unicode-bidi",
  };
});
var r = m(i()),
  { A: G, B: I, C: b } = r,
  { default: n, ...x } = r,
  D = n !== void 0 ? n : x;
export { b as C, D as default, G as A, I as B };
