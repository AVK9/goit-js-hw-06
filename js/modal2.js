(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-fead]"),
    closeModalBtn: document.querySelector("[data-modal-close-fead]"),
    modal: document.querySelector("[data-modal-fead]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();