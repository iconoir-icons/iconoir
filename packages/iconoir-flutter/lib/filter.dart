import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Filter extends StatelessWidget {
  const Filter({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Filter.svg');
}
