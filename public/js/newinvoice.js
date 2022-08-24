


const createInvoice = async (event) => {
  event.preventDefault();

  // Collect values from the Invoice form and invokes api route to update on table
  const amount = document.querySelector('#amount').value.trim();
  const ddate = document.querySelector('#ddate').value.trim();
  const memo = document.querySelector('#memo').value.trim();
  // const id = document.querySelector('#id').value.trim();
  const id = document.getElementById('names').value;

  if (amount && ddate && memo && id) {
    const response = await fetch('/api/invoices/new', {
      method: 'POST',
      body: JSON.stringify({ amount, ddate, memo, id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("New Invoice Added")
      
        var invoice=document.getElementById("invoiceadd");
        invoice.style.display = "block";
      document.querySelector('#amount').value = "";
      document.querySelector("#ddate").value = "";
      document.querySelector("#memo").value = "";
      // document.querySelector("#id").value = "";

    }
  }
}

document.querySelector("#newinvoice").addEventListener('click', createInvoice);

