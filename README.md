# Angular Cursos - Resumen Completo

Este repositorio contiene 4 proyectos de aprendizaje de Angular y TypeScript, cubriendo desde conceptos básicos hasta aplicaciones completas.

---

## 📚 Proyectos

### 1. `01-typescript-intro` - Fundamentos de TypeScript
### 2. `02-bases` - Bases de Angular
### 3. `03-gifs-app` - Aplicación de Búsqueda de GIFs
### 4. `04-country-app` - Aplicación de Países

---

## 🔷 Conceptos de TypeScript Usados

### **Variables y Declaraciones**

#### `const`
Declara una **constante** cuyo valor no puede ser reasignado.
```typescript
const name: string = 'Lucas';
const skills: string[] = ['bash', 'Counter', 'healing'];
```

#### `let`
Declara una **variable** cuyo valor puede cambiar.
```typescript
let hppoints: number | 'string' = 95;
hppoints = 123; // ✓ Permitido
```

#### `var` (no usado, evitado)
Variable con alcance de función (antiguo, no recomendado).

---

### **Tipos de Datos Básicos**

#### Primitivos
```typescript
const name: string = 'Lucas';
let hp: number = 95;
const isAlive: boolean = true;
```

#### Arrays
```typescript
const skills: string[] = ['bash', 'Counter', 'healing'];
```

#### Union Types
```typescript
let hppoints: number | 'string' = 95;
```

#### Interfaces
```typescript
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // Propiedad opcional
}
```

#### Type Alias
```typescript
type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';
```

---

### **Funciones**

#### Funciones Tradicionales
```typescript
function addNumbers(a: number, b: number): number {
    return a + b;
}
```

#### Arrow Functions
```typescript
const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}
```

#### Parámetros Opcionales y por Defecto
```typescript
function multiply(firstNumber: number, secondNumber?: number, base: number = 7) {
    return firstNumber * base;
}
```

#### Desestructuración en Parámetros
```typescript
function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    });
    return [total, total * tax];
}
```

---

### **Desestructuración**

#### Desestructuración de Objetos
```typescript
const { song: anotherSong, songDuration: duration, detail: { author } } = audioPlayer;
```

#### Desestructuración de Arrays
```typescript
const [, , trunks = 'not found']: string[] = ['goku', 'vegeta'];
const [total, tax] = taxCalculation({ tax: 0.15, products: shoppingCart });
```

---

### **Clases**

#### Declaración de Clases
```typescript
export class Person {
    constructor(
        public firstname: string,
        public lastname: string,
        private address: string = 'not specified'
    ) {}
}
```

#### Herencia y Composición
```typescript
export class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {}
}
```

---

### **Genéricos**

```typescript
export function whatsMyType<T>(argument: T): T {
    return argument;
}

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(123);
```

---

### **Decoradores**

```typescript
function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'abc123';
}
```

---

### **Optional Chaining**

```typescript
const passenger1: Passenger = { name: 'Lucas' };
const passenger2: Passenger = {
    name: 'Saida',
    children: ['Natalia', 'Gabriel']
};

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}
```

---

## 🅰️ Conceptos de Angular Usados

### **Componentes**

Los componentes son los bloques básicos de Angular. Cada componente tiene:
- **Selector**: nombre del tag HTML
- **Template**: vista HTML
- **Estilos**: CSS del componente
- **Lógica**: clase TypeScript

```typescript
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Lucas';
}
```

---

### **Signals (Angular 17+)**

Los **Signals** son una forma reactiva de manejar estado en Angular.

#### `signal()` - Crear una señal
```typescript
counter = signal(10);
name = signal('Ironman');
```

#### `.set()` - Establecer nuevo valor
```typescript
this.name.set('Spider-Man');
this.counter.set(0);
```

#### `.update()` - Actualizar basado en valor anterior
```typescript
this.counter.update((current) => current + 1);
```

#### `computed()` - Señal computada (derivada)
```typescript
heroDescription = computed(() => {
    return `${this.name()} - ${this.age()} años`;
});
```

#### `effect()` - Ejecutar código cuando cambian las señales
```typescript
saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
});
```

---

### **Inputs y Outputs**

#### `input()` - Recibir datos del padre
```typescript
// Componente hijo
characters = input.required<Character[]>();
listName = input.required<string>();
placeholder = input('Search country by capital');
```

```html
<!-- Componente padre -->
<character-list [characters]="characters()" [listName]="'Personajes'" />
```

#### `input.required()` - Input obligatorio
```typescript
gifs = input.required<Gif[]>();
```

#### `output()` - Emitir eventos al padre
```typescript
// Componente hijo
value = output<string>();
regionSelected = output<Region>();

onSearch() {
    this.value.emit(txtSearch.value);
}
```

```html
<!-- Componente padre -->
<country-search (value)="query.set($event)" />
```

---

### **Directivas de Control de Flujo (Angular 17+)**

#### `@if` - Condicional
```typescript
@if (character.power > 10000) {
    <li>Personaje fuerte: {{ character.name }}</li>
} @else {
    <li>Personaje débil</li>
}
```

#### `@for` - Bucles
```typescript
@for (character of characters(); track character.id; let i = $index) {
    <li>{{ i + 1 }} - {{ character.name }}</li>
}
```

**Parámetros de `@for`:**
- `track`: identificador único (obligatorio)
- `$index`: índice actual
- `$first`: primer elemento
- `$last`: último elemento
- `$even`: índice par
- `$odd`: índice impar

#### `@else if`
```typescript
@if (countries().length > 0) {
    <p>Hay países</p>
} @else if (isLoading()) {
    <p>Cargando...</p>
} @else {
    <p>No hay datos</p>
}
```

---

### **Inyección de Dependencias**

#### `inject()` - Inyectar servicios
```typescript
gifService = inject(GifService);
router = inject(Router);
activatedRoute = inject(ActivatedRoute);
```

#### `@Injectable` - Crear servicios
```typescript
@Injectable({ providedIn: 'root' })
export class CountryService {
    private http = inject(HttpClient);
}
```

---

### **Signals Avanzados**

#### `linkedSignal()` - Señal enlazada a otra
```typescript
query = linkedSignal(() => this.getInitialQuery());
```

#### `toSignal()` - Convertir Observable a Signal
```typescript
query = toSignal(
    inject(ActivatedRoute).params.pipe(
        map((params) => params['query'] ?? '')
    )
);
```

---

### **Resources (Angular 19+)**

#### `rxResource()` - Recursos reactivos con RxJS
```typescript
countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
        if (!request.query) return of([]);
        return this.countryService.searchByCapital(request.query);
    }
});
```

**Propiedades del Resource:**
- `.value()` - Valor actual
- `.isLoading()` - Está cargando
- `.error()` - Error si existe
- `.hasValue()` - Tiene valor

```html
@if (countryResource.isLoading()) {
    <p>Cargando...</p>
}

@if (countryResource.hasValue()) {
    <country-list [countries]="countryResource.value() ?? []" />
}

@if (countryResource.error()) {
    <p>Error: {{ countryResource.error() }}</p>
}
```

---

### **Routing (Enrutamiento)**

#### Rutas Principales
```typescript
export const routes: Routes = [
    { path: '', component: HomePageComponent },
    {
        path: 'country',
        loadChildren: () => import('./country/country.routes')
    },
    { path: '**', redirectTo: '' }
];
```

#### Lazy Loading de Componentes
```typescript
{
    path: 'search',
    loadComponent: () => import('./gifs/page/search-page/search-page.component'),
}
```

#### Rutas Anidadas
```typescript
{
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
        { path: 'trending', component: TrendingPageComponent },
        { path: 'search', component: SearchPageComponent },
        { path: '**', redirectTo: 'trending' }
    ]
}
```

#### RouterLink - Navegación en Templates
```html
<a routerLink="/country" class="btn">Go to Countries</a>
<a [routerLink]="['/country/by', country.cca2]">Ver detalles</a>
```

#### RouterLinkActive - Clase activa
```html
<a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
    Home
</a>
```

---

### **HTTP Client**

#### Configuración
```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withFetch())
    ]
};
```

#### Uso en Servicios
```typescript
private http = inject(HttpClient);

searchByCapital(query: string): Observable<Country[]> {
    return this.http.get<RESTCountry[]>(`${baseUrl}/capital/${query}`).pipe(
        map((resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
        catchError((error) => {
            return throwError(() => new Error(`Error: ${error}`));
        })
    );
}
```

---

### **RxJS Operators**

#### `map()` - Transformar datos
```typescript
.pipe(
    map((resp) => CountryMapper.mapRestCountriesToCountryArray(resp))
)
```

#### `tap()` - Efectos secundarios
```typescript
.pipe(
    tap(countries => this.queryCache.set(query, countries))
)
```

#### `catchError()` - Manejo de errores
```typescript
.pipe(
    catchError((error) => {
        console.log('Error en el servicio', error);
        return throwError(() => new Error(`Error: ${error}`));
    })
)
```

#### `delay()` - Retrasar emisión
```typescript
.pipe(
    delay(5000)
)
```

---

### **Lifecycle Hooks**

#### `ngAfterViewInit()` - Después de inicializar la vista
```typescript
export class TrendingPageComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        const scrollDiv = this.scrollDivRef()?.nativeElement;
        if (!scrollDiv) return;
        scrollDiv.scrollTop = this.scrollStateService.trendingScrollPosition();
    }
}
```

---

### **ViewChild y Signals**

#### `viewChild()` - Obtener referencia a elemento del DOM
```typescript
scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    console.log(scrollDiv);
}
```

```html
<div #groupDiv (scroll)="onScroll($event)">
    <!-- contenido -->
</div>
```

---

### **Event Binding**

#### Click
```html
<button (click)="increaseBy(1)">+1</button>
<button (click)="reset()">Reset</button>
```

#### Input/Change
```html
<input
    type="text"
    [value]="name()"
    (input)="name.set(txtName.value)"
    #txtName
/>
```

#### Keyup.enter
```html
<input
    type="text"
    (keyup.enter)="onSearch(txtSearch.value)"
    #txtSearch
/>
```

#### Scroll
```html
<div (scroll)="onScroll($event)">
```

---

### **Template Reference Variables**

Usar `#` para obtener referencia al elemento:

```html
<input #txtName type="text" />
<button (click)="console.log(txtName.value)">Log</button>
```

---

### **Property Binding**

#### `[property]`
```html
<img [src]="country.FlagSvg" [alt]="country.name" />
<input [value]="name()" />
<button [disabled]="isLoading()" />
```

#### `[class]` y `[class.nombre]`
```html
<span [class.text-danger]="character.power > 15000">
    {{ character.power }}
</span>
```

#### `[style]`
```html
<div [style.background-image]="'url(' + imageUrl + ')'">
```

---

### **Standalone Components (Angular 15+)**

Todos los componentes en estos proyectos son **standalone** (no necesitan NgModule):

```typescript
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavbarComponent], // Importar otros componentes
    templateUrl: './app.component.html',
    standalone: true // Por defecto en Angular 17+
})
export class AppComponent {}
```

---

### **Change Detection**

#### `ChangeDetectionStrategy.OnPush`
Optimiza el rendimiento detectando cambios solo cuando cambian los inputs o signals:

```typescript
@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {}
```

---

### **Pipes**

#### Pipes Built-in de Angular
```html
<!-- UpperCasePipe -->
<dd>{{ name() | uppercase }}</dd>

<!-- DecimalPipe (number) -->
<td>{{ country.population | number }}</td>
```

---

### **LocalStorage**

#### Guardar datos
```typescript
saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
});
```

#### Cargar datos
```typescript
const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
};
```

---

### **Mappers (Patrón de Diseño)**

Los **mappers** transforman datos de una estructura a otra:

```typescript
export class CountryMapper {
    static mapRestCountryToCountry(restCountry: RESTCountry): Country {
        return {
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            name: restCountry.translations['spa'].common ?? 'No Spanish Name',
            capital: restCountry.capital?.join(','),
            population: restCountry.population
        };
    }

    static mapRestCountriesToCountryArray(restCountries: RESTCountry[]): Country[] {
        return restCountries.map(this.mapRestCountryToCountry);
    }
}
```

---

### **Caché con Map**

```typescript
private queryCacheCapital = new Map<string, Country[]>();

searchByCapital(query: string): Observable<Country[]> {
    if (this.queryCacheCapital.has(query)) {
        return of(this.queryCacheCapital.get(query) ?? []);
    }

    return this.http.get<RESTCountry[]>(`${baseUrl}/capital/${query}`).pipe(
        map((resp) => CountryMapper.mapRestCountriesToCountryArray(resp)),
        tap(countries => this.queryCacheCapital.set(query, countries))
    );
}
```

---

## 🎨 Estilos y UI

### **Tailwind CSS**
Framework de utilidades CSS usado en `03-gifs-app` y `04-country-app`:

```html
<div class="flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold">Título</h1>
</div>
```

#### Configuración
```javascript
// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: { extend: {} },
    plugins: [require('daisyui')],
}
```

### **DaisyUI**
Componentes de Tailwind CSS usados en `04-country-app`:

```html
<button class="btn btn-primary">Click me</button>
<div class="card shadow-lg">...</div>
<table class="table">...</table>
```

### **Bootstrap**
Framework CSS usado en `02-bases`:

```html
<button class="btn btn-primary">Button</button>
```

---

## 📂 Estructura de Proyectos

### **01-typescript-intro**
```
01-typescript-intro/
├── src/
│   ├── main.ts
│   ├── topics/
│   │   ├── 01-basic-types.ts
│   │   ├── 02-object-interface.ts
│   │   ├── 03-functions.ts
│   │   ├── 04-homework-types.ts
│   │   ├── 05-basic-destructuring.ts
│   │   ├── 06-function-destructuring.ts
│   │   ├── 07-import-export.ts
│   │   ├── 08-clases.ts
│   │   ├── 09-generics.ts
│   │   ├── 10-decorators.ts
│   │   └── 11-optional-chaining.ts
├── package.json
└── tsconfig.json
```

### **02-bases**
```
02-bases/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── dragonball/
│   │   │   └── shared/navbar/
│   │   ├── pages/
│   │   │   ├── counter/
│   │   │   ├── hero/
│   │   │   ├── dragonball/
│   │   │   └── dragonball-super/
│   │   ├── services/
│   │   │   └── dragonball.service.ts
│   │   └── interfaces/
│   │       └── character.interface.ts
├── package.json
└── angular.json
```

### **03-gifs-app**
```
03-gifs-app/
├── src/
│   ├── app/
│   │   ├── gifs/
│   │   │   ├── components/
│   │   │   ├── interfaces/
│   │   │   ├── mapper/
│   │   │   ├── page/
│   │   │   └── services/
│   │   └── shared/
│   │       └── services/
│   └── environments/
│       ├── environment.ts
│       └── environment.development.ts
├── package.json
└── angular.json
```

### **04-country-app**
```
04-country-app/
├── src/
│   ├── app/
│   │   ├── country/
│   │   │   ├── components/
│   │   │   ├── interfaces/
│   │   │   ├── layouts/
│   │   │   ├── mapper/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   └── shared/
│   │       ├── components/
│   │       └── pages/
├── package.json
└── angular.json
```

---

## 🛠️ Herramientas y Tecnologías

### **TypeScript**
- Versión: 5.7.2 - 5.9.3
- Configuración estricta (`strict: true`)

### **Angular**
- Versión: 19.2.0
- Standalone components
- Signals (reactivo)
- Resources (rxResource)
- Nueva sintaxis de control de flujo (@if, @for)

### **Vite**
- Bundler rápido (usado en `01-typescript-intro`)

### **RxJS**
- Versión: 7.8.0
- Operadores: map, tap, catchError, delay, of, throwError

### **Tailwind CSS**
- Versión: 3.4.18 - 4.1.17
- DaisyUI: 4.12.24

### **APIs Externas**
- **Giphy API**: búsqueda de GIFs
- **REST Countries API**: información de países

---

## 📝 Patrones y Buenas Prácticas

### **1. Separation of Concerns**
- Servicios para lógica de negocio
- Componentes para UI
- Interfaces para tipos
- Mappers para transformación de datos

### **2. Reactive Programming**
- Uso de Signals en lugar de observables cuando es posible
- RxJS para operaciones asíncronas
- Resources para cargas de datos reactivas

### **3. Type Safety**
- Interfaces para todos los modelos
- Tipado estricto en funciones
- Union types para estados

### **4. Performance**
- `ChangeDetectionStrategy.OnPush`
- Lazy loading de rutas
- Caché de peticiones HTTP

### **5. Code Reusability**
- Componentes reutilizables
- Servicios compartidos
- Mappers estáticos

---

## 🚀 Comandos Útiles

### **Desarrollo**
```bash
# Iniciar servidor de desarrollo
ng serve
npm run dev

# Compilar para producción
ng build
npm run build

# Ejecutar tests
ng test
npm test
```

### **Generación de Componentes**
```bash
# Generar componente
ng generate component components/mi-componente

# Generar servicio
ng generate service services/mi-servicio

# Generar interfaz
ng generate interface interfaces/mi-interface
```

---

## 🎓 Conceptos Aprendidos por Proyecto

### **01-typescript-intro**
✓ Tipos básicos  
✓ Interfaces  
✓ Funciones y arrow functions  
✓ Desestructuración  
✓ Clases  
✓ Genéricos  
✓ Decoradores  
✓ Optional chaining  

### **02-bases**
✓ Componentes Angular  
✓ Signals  
✓ Property binding  
✓ Event binding  
✓ Directivas @if, @for  
✓ Servicios e inyección de dependencias  
✓ Routing básico  
✓ LocalStorage  

### **03-gifs-app**
✓ HTTP Client  
✓ RxJS (map, tap, catchError)  
✓ Lazy loading  
✓ Resources (rxResource)  
✓ Mappers  
✓ Environment variables  
✓ Tailwind CSS  
✓ Rutas anidadas  

### **04-country-app**
✓ Arquitectura modular  
✓ Resources avanzados  
✓ Caché con Map  
✓ linkedSignal  
✓ toSignal  
✓ Query params  
✓ DaisyUI  
✓ Gestión de estado compleja  

---

## 📖 Recursos Adicionales

- [Angular Documentation](https://angular.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [RxJS Documentation](https://rxjs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI Components](https://daisyui.com/)
- [REST Countries API](https://restcountries.com/)
- [Giphy API](https://developers.giphy.com/)

---

## ✨ Autor

**Lucas Lipa Matta**

Proyectos de aprendizaje de Angular y TypeScript - 2025

---

**Happy Coding! 🚀**
