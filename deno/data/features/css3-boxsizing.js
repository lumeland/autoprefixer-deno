/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css3-boxsizing) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var m = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of i(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var p = (
  C,
  B,
  e,
) => (e = C != null ? r(l(C)) : {},
  m(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = S((E, d) => {
  d.exports = {
    A: {
      A: { 1: "E F A B", 8: "J D 1B" },
      B: {
        1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
      },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB",
        33: "2B oB I p J D E F A B C K L G M N O q r s t u v w x y z 3B 4B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
        33: "I p J D E F",
      },
      E: {
        1: "J D E F A B C K L G 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
        33: "I p 7B tB",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z GC HC IC JC lB zB KC mB",
        2: "F",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
        33: "tB LC 0B",
      },
      H: { 1: "fC" },
      I: { 1: "I H jC 0B kC lC", 33: "oB gC hC iC" },
      J: { 1: "A", 33: "D" },
      K: { 1: "A B C b lB zB mB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "mC" },
      P: { 1: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 1: "zC" },
      R: { 1: "0C" },
      S: { 1: "1C" },
    },
    B: 5,
    C: "CSS3 Box-sizing",
  };
});
var n = p(a()),
  { A: F, B: G, C: H } = n,
  { default: f, ...x } = n,
  I = f !== void 0 ? f : x;
export { F as A, G as B, H as C, I as default };
