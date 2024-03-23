// netSalary = grossSalary - totalDeduct
// grossSalary = basicSalary + benefits
// totalDeduct = nhifDeduct + nssfDeduct + tax
// nhifDeduct = 750
// nssfDeduct = basicSalary *  nssfRate
// nssfRate = 0.06
// tax = basicSalary * taxRate
// taxRate = 0,10

function calcNetSalary (basicSalary, benefits){ 
  // declaring calculation of salary
  const taxRate = 0.10;
  const tax = basicSalary * taxRate;
  // tax is calculated by multiplying basicSalary by taxRate

  const nhifDeduct = 750;

  const nssfRate = 0.06;
  const nssfDeduct = basicSalary * nssfRate;
  // nssfDeduct is calculated as shown above basicSalary by nssfRate

  const grossSalary = basicSalary + benefits;
  // grossSalary is the total salary with benefits but without any deductions
  const totalDeduct = nhifDeduct + nssfDeduct + tax;
  const netSalary = grossSalary - totalDeduct;
  // netSalary is what one takes home after all deduction snd benefits
  
  console.log("netSalary")
//   return 'netSalary'

}