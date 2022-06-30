import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Sphere extends StatelessWidget {
  const Sphere({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Sphere.svg');
}
