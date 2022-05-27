import com.example.demo.models.ArtcleRepo;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ArtcleRepo;

    @Autowired (3)
    public DatabaseLoader(ArtcleRepo repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception { (4)
        this.repository.save(new Employee("Frodo", "Baggins", "ring bearer"));
    }
}