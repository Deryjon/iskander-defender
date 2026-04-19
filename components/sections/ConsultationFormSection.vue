<template>
  <section id="consultation" class="section-padding bg-ivory">
    <div class="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
      <div>
        <BaseSectionTitle eyebrow="Консультация" title="Оставьте заявку на юридическую оценку" text="Форма короткая: достаточно контактов, категории дела и краткого описания. После отправки frontend готов передать лид в backend API." />
        <div class="mt-8 grid gap-4 text-sm leading-7 text-steel">
          <p class="flex gap-3"><Icon name="lucide:shield-check" class="mt-1 h-5 w-5 shrink-0 text-bronze" />Конфиденциальная обработка обращения.</p>
          <p class="flex gap-3"><Icon name="lucide:send" class="mt-1 h-5 w-5 shrink-0 text-bronze" />Подготовлено под CRM и Telegram-уведомления через backend.</p>
          <p class="flex gap-3"><Icon name="lucide:clock" class="mt-1 h-5 w-5 shrink-0 text-bronze" />Приоритетная реакция по срочным делам.</p>
        </div>
      </div>
      <div class="premium-card p-4 sm:p-8">
        <ConsultationForm />
      </div>
    </div>
  </section>
</template>
