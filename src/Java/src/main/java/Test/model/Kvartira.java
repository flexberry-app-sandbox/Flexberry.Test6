package Test.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Квартира
 */
@Entity(name = "IISTestКвартира")
@Table(schema = "public", name = "Квартира")
public class Kvartira {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Кв")
    private String кв;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zdanie")
    @Convert("Zdanie")
    @Column(name = "Здание", length = 16, unique = true, nullable = false)
    private UUID _zdanieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zdanie", insertable = false, updatable = false)
    private Zdanie zdanie;


    public Kvartira() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getКв() {
      return кв;
    }

    public void setКв(String кв) {
      this.кв = кв;
    }


}