/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/mdn-text-decoration-shorthand) es2022 production */
var s = Object.create;
var r = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var f = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of f(B)) {
      !u.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(o = A(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  t,
) => (t = C != null ? s(l(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var a = c((G, d) => {
  d.exports = {
    A: {
      D: {
        1: "SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        2: "0 1 2 3 4 5 6 7 8 9 I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB",
      },
      L: { 1: "H" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        2: "C K L G M N O",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        2: "2B oB I p 3B 4B",
      },
      M: { 1: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        1: "FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB BB CB DB EB GC HC IC JC lB zB KC mB",
      },
      K: { 1: "b", 2: "A B C lB zB mB" },
      E: {
        2: "I p J D 7B tB 8B 9B AC FC",
        33: "E F A B C K L G BC uB lB mB CC DC EC vB wB xB yB nB",
      },
      G: {
        2: "tB LC 0B MC NC OC",
        33: "E PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      P: { 1: "pC qC rC uB sC tC uC vC wC nB xC yC", 2: "I nC oC" },
      I: { 1: "H", 2: "oB I gC hC iC jC 0B kC lC" },
    },
    B: 6,
    C: "text-decoration shorthand property",
  };
});
var p = x(a()),
  { A: I, B: h, C: m } = p,
  { default: n, ...E } = p,
  D = n !== void 0 ? n : E;
export { D as default, h as B, I as A, m as C };
