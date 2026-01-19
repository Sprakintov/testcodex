import styles from '../styles/Home.module.css';

const categories = [
  {
    name: 'Imagerie & diagnostic',
    description: 'Échographes portables, tensiomètres, otoscopes connectés.'
  },
  {
    name: 'Soins & pansements',
    description: 'Pansements hydrocolloïdes, compresses stériles, kits de soin.'
  },
  {
    name: 'Mobilité & rééducation',
    description: 'Fauteuils roulants, béquilles, accessoires de rééducation.'
  }
];

const featuredProducts = [
  {
    name: 'Tensiomètre connecté ProCare',
    description: 'Mesures précises avec synchronisation mobile et rapport PDF.',
    price: '129 €'
  },
  {
    name: 'Kit d’urgence stérile 24h',
    description: 'Contient plus de 30 éléments essentiels pour les soins rapides.',
    price: '89 €'
  },
  {
    name: 'Fauteuil roulant ActiveFlex',
    description: 'Cadre léger en aluminium, confort ajustable et pliable.',
    price: '899 €'
  }
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.nav}>
          <span className={styles.brand}>MediSupply</span>
          <div className={styles.navLinks}>
            <a href="#categories">Catégories</a>
            <a href="#featured">Produits</a>
            <a href="#contact">Contact</a>
          </div>
          <button className={styles.cta}>Demander un devis</button>
        </nav>
        <div className={styles.heroContent}>
          <div>
            <p className={styles.tag}>Vente de matériel médical</p>
            <h1>Une boutique fiable pour équiper vos établissements de santé.</h1>
            <p className={styles.subtitle}>
              Livraison rapide, certifications CE, catalogue complet pour cliniques, hôpitaux et soins à domicile.
            </p>
            <div className={styles.actions}>
              <button className={styles.primary}>Découvrir le catalogue</button>
              <button className={styles.secondary}>Parler à un expert</button>
            </div>
          </div>
          <div className={styles.heroCard}>
            <h3>Avantages MediSupply</h3>
            <ul>
              <li>Support 24/7 pour les équipes médicales</li>
              <li>Suivi de commandes en temps réel</li>
              <li>Tarifs dégressifs pour les structures</li>
            </ul>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section id="categories" className={styles.section}>
          <h2>Catégories clés</h2>
          <div className={styles.grid}>
            {categories.map((category) => (
              <article key={category.name} className={styles.card}>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="featured" className={styles.sectionAlt}>
          <h2>Produits en vedette</h2>
          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <article key={product.name} className={styles.card}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className={styles.price}>{product.price}</span>
                <button className={styles.cardButton}>Ajouter au panier</button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact professionnel</h2>
          <div className={styles.contact}>
            <div>
              <p>Besoin d’un devis personnalisé ou d’un conseil équipement ?</p>
              <p>Écrivez-nous à <strong>commercial@medisupply.fr</strong> ou appelez le 01 84 00 00 00.</p>
            </div>
            <form className={styles.form}>
              <input type="text" placeholder="Nom de l’établissement" />
              <input type="email" placeholder="Email professionnel" />
              <textarea placeholder="Décrivez vos besoins" rows="4" />
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 MediSupply. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
