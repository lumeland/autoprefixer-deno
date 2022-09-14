/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-width-stretch) es2022 production */
var A = Object.create;
var r = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var c = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of l(B)) {
      !u.call(C, e) && e !== t && r(C, e, {
        get: () => B[e],
        enumerable: !(o = f(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  t,
) => (t = C != null ? A(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? r(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var a = c((I, d) => {
  d.exports = {
    A: {
      D: {
        2: "I p J D E F A B C K L G M N O q r s",
        33:
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      L: { 33: "H" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        2: "2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB 3B 4B",
      },
      M: { 33: "a" },
      A: { 2: "J D E F A B 1B" },
      F: {
        2: "F B C GC HC IC JC lB zB KC mB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      K: { 2: "A B C lB zB mB", 33: "b" },
      E: {
        2: "I p J 7B tB 8B 9B FC",
        33: "D E F A B C K L G AC BC uB lB mB CC DC EC vB wB xB yB nB",
      },
      G: {
        2: "tB LC 0B MC NC",
        33:
          "E OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      P: { 2: "I", 33: "nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      I: { 2: "oB I gC hC iC jC 0B", 33: "H kC lC" },
    },
    B: 6,
    C: "width: stretch property",
  };
});
var s = E(a()),
  { A: h, B: m, C: x } = s,
  { default: p, ...F } = s,
  D = p !== void 0 ? p : F;
export { D as default, h as A, m as B, x as C };
