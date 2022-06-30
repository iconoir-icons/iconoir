import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Farm extends StatelessWidget {
  const Farm({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Farm.svg');
}
