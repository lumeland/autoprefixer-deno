/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/object-fit) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var u = (C, B, t, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let e of c(B)) {
      !n.call(C, e) && e !== t && A(C, e, {
        get: () => B[e],
        enumerable: !(o = s(B, e)) || o.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  t,
) => (t = C != null ? r(l(C)) : {},
  u(
    B || !C || !C.__esModule
      ? A(t, "default", { value: C, enumerable: !0 })
      : t,
    C,
  ));
var f = p((E, d) => {
  d.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        2: "C K L G",
        260: "M N O",
      },
      C: {
        1: "5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z 1B 2B",
      },
      D: {
        1: "1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 I n J D E F A B C K L G M N O o p q r s t u v w x y z",
      },
      E: {
        1: "A B C K L G tB jB kB 9B AC BC uB vB wB CC lB DC",
        2: "I n J D 4B sB 5B 6B",
        132: "E F 7B 8B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "F G M N O EC FC GC",
        33: "B C HC jB xB IC kB",
      },
      G: {
        1: "QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        2: "sB JC yB KC LC MC",
        132: "E NC OC PC",
      },
      H: { 33: "dC" },
      I: { 1: "H jC", 2: "mB I eC fC gC hC yB iC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A", 33: "B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS3 object-fit/object-position",
  };
});
var i = S(f()),
  { A: F, B: G, C: H } = i,
  { default: a, ...b } = i,
  I = a !== void 0 ? a : b;
export { F as A, G as B, H as C, I as default };
