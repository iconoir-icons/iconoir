import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class City extends StatelessWidget {
  const City({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/City.svg');
}
