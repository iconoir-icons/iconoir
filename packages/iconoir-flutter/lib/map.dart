import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Map extends StatelessWidget {
  const Map({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Map.svg');
}
