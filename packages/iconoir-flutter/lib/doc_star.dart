import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class DocStar extends StatelessWidget {
  const DocStar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/DocStar.svg');
}
